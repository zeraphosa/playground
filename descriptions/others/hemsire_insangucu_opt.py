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