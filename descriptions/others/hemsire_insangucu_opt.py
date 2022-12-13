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