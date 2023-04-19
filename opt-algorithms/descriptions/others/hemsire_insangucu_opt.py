import numpy as np
import random
import matplotlib.pyplot as plt

gun_sayisi = 7
hemsire_sayisi = 8
populasyon = 100

if(gun_sayisi == 7):
    calisma_saati = 40
else:
    calisma_saati = 160

# 1. sinirlilik: gece vardiyasindan sonraki gun calisilmayacak
def gece_vardiyası(NSPtablo):
    tablo = NSPtablo.copy()
    for p in range(0,tablo.shape[0]):  #populasyondaki her bir diziye erişim
        for i in range(0,tablo.shape[1]):  # hemsire sayısı
            for j in range(1,tablo.shape[2]): # gün sayısı
                if tablo[p, i,j-1] == 16:
                    tablo[p, i,j] = 0
            
    return tablo

# ceza durumunu hesapla
def haftalik_calisma(nsp_tablo):
    for p in range(0,nsp_tablo.shape[0]):
        for i in range(0,nsp_tablo.shape[1]):
            nsp_tablo[p,i,-1] = 0
            haftalik_calisma = nsp_tablo[p,i].sum()
            nsp_tablo[p,i,-1] = haftalik_calisma
    return nsp_tablo

# ceza durumunu hesapla
def ceza_hesapla(nsp_tablo):
    kd_sabah = 8.45
    kd_aksam = 15.75
    ceza_tablo = np.zeros((populasyon,1))
    
    for p in range(0,nsp_tablo.shape[0]):
        ceza = 0
        for i in range(0,nsp_tablo.shape[1]):
            if nsp_tablo[p,i,-1] != calisma_saati:  # haftalık çalışma saati
                ekle = nsp_tablo[p,i,-1] - calisma_saati
                if ekle < 0:
                    ekle = -1* ekle
                ceza += ekle
       
        for i in range(0,nsp_tablo.shape[2]-1):
            sabah_calisma = 0
            aksam_calisma = 0
            for j in range(0,nsp_tablo.shape[1]):
                if nsp_tablo[p,j,i] == 8:
                    sabah_calisma += 1
                elif nsp_tablo[p,j,i] == 16:
                    aksam_calisma += 2
            hastabakim_sabah = sabah_calisma * 4.64    #4.64 günlük hemsire ilgilenme süresi
            hastabakim_aksam = aksam_calisma * 4.64
            
            ceza_hBs = hastabakim_sabah - kd_sabah
            ceza_hBa = hastabakim_aksam - kd_aksam
            
            if ceza_hBs < 0:
                ceza_hBs = -1 * ceza_hBs
            if ceza_hBa < 0:
                ceza_hBa = -1 * ceza_hBa   
                
            ceza += ceza_hBs + ceza_hBa
        ceza_tablo[p] = ceza
        
    return ceza_tablo

def dogal_secilim(nsp_tablo, ceza_tablo):
    o_tablo = 1/ceza_tablo    #minimizasyon problemi için kullanacağız
    obj_toplam = o_tablo.sum()
    
    for i in range(0,o_tablo.shape[0]):
        o_tablo[i] = o_tablo[i]/obj_toplam
    cum = np.cumsum(o_tablo)
    
    rs = np.random.rand(populasyon)    
    ara_populasyon = nsp_tablo.copy()
    
    for p in range(0, populasyon):
        idx = len(cum[np.where(cum <= rs[p])])    # rasgele değerin birikimlik olasilikta nereye geldiği aranıyor
        ara_populasyon[p] = nsp_tablo[idx]

    return ara_populasyon

def caprazla(ara_populasyon):
    arapop = ara_populasyon.copy()
    cp = 0.95       #çaprazlama olasılığı
    sirala = np.random.permutation(populasyon) 
    for i in range(0, int(populasyon/2)):
        id1 = sirala[2*i]
        id2 = sirala[2*i+1]
        ata1 = arapop[id1]
        ata2 = arapop[id2]
        if np.random.rand() < cp:
            cpz_noktasi = np.random.randint(1,gun_sayisi-1)
            ata1[:,cpz_noktasi:-1], ata2[:,cpz_noktasi:-1] = ata2[:,cpz_noktasi:-1].copy(), ata1[:,cpz_noktasi:-1].copy()
            arapop[id1] = ata1
            arapop[id2] = ata2
                    
    return arapop

def mutasyon(ara_populasyon2):
    mts_orani = 0.05
    arapop = ara_populasyon2.copy()
    
    rnd = np.random.rand(populasyon,hemsire_sayisi, gun_sayisi+1)
    
    for p in range(0,populasyon):
        for i in range(0, hemsire_sayisi):
            for j in range(0, gun_sayisi):
                if rnd[p,i,j] < mts_orani:
                    rs = np.random.randint(0,3)
                    if rs == 0:
                        arapop[p,i,j] = 0
                    elif rs == 1:
                        arapop[p,i,j] = 8
                    else:
                        arapop[p,i,j] = 16
    return arapop

# hemsire vardiya atamalarını rasgele yap
nsp_tablo = np.zeros((populasyon,hemsire_sayisi, gun_sayisi+1))  # bir kolon haftalik_calisma, populasyon sayısı kadar
for p in range(0,populasyon):
    for i in range(0,gun_sayisi):
        rnd = np.random.randint(5,hemsire_sayisi)
        atamalar = random.sample(range(0,hemsire_sayisi),rnd)     #%% 3 gece vardiyası+ 2 gündüz vardiyası = en az 5 kişi seç
        for j in range(0,rnd):
            rnd2 = np.random.randint(0,2)
            if rnd2 == 1:
                nsp_tablo[p,atamalar[j],i] = 16
            else:
                nsp_tablo[p,atamalar[j], i] = 8

# hatalı durumları 1. sınırlılığa göre tamir et 
eniyideger = 10000

iter = 0
iter_max = 10000
iter_durum = np.zeros(iter_max)
while iter < iter_max:
    nsp_tablo = gece_vardiyası(nsp_tablo)
    nsp_tablo = haftalik_calisma(nsp_tablo)
    ceza_tablo = ceza_hesapla(nsp_tablo) 
    
    #En iyi degeri ve durumu kaydet
    if(ceza_tablo.min() < eniyideger):
        eniyideger = ceza_tablo.min()
        eniyicozum = nsp_tablo[np.argmin(ceza_tablo)]
    
    iter_durum[iter] = eniyideger
    
    
    ara_populasyon = dogal_secilim(nsp_tablo, ceza_tablo)
    ara_populasyon = caprazla(ara_populasyon)
    nsp_tablo = mutasyon(ara_populasyon)
    iter = iter + 1

plt.plot(iter_durum)
plt.show()