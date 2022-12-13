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

