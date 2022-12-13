from itertools import combinations
import pandas as pd
import numpy as np
import math


def veri_oku(YOL):
    return pd.read_excel(YOL, names=['is', 'agirlik', 'islem_suresi', 'bitme_zamani'], index_col=0).to_dict('index')

isler = veri_oku('exceldosyasi.xlsx')

# amac fonksiyonu toplam(Wi*Ti)

def Objfun(isler,cozum):
    dict = isler
    c_i = 0 # baslama saati
    objfun_degeri = 0
    for is_ in cozum:
        c_i += dict[is_]["islem_suresi"]
        d_i = dict[is_]["bitirme_zamani"]
        T_i = max(0,c_i - d_i)
        W_i = dict[is_]["agirlik"]
        objfun_degeri += W_i*T_i
        #print("c_i:", c_i)
        #print("d_i:", d_i)
        #print("T_i:", T_i)
    print('\n {} icin amac fonksiyonu degeri: {}\n'.format(cozum,objfun_degeri))
    return objfun_degeri

cozum1 = [1,2,5,6,8,9,10,3,4,7]
Objfun(isler, cozum1)
# sonuc 27.090000003 olmali

def get_baslangicCozumu(isler, show=False):
    is_sayisi = len(isler) # is sayisi
    baslangicCozumu = list(np.random.permutation(is_sayisi)+1)
    if show == True:
        print("\nBaslangic cozumu: {}".format(baslangicCozumu))
    return baslangicCozumu

def get_komsuCozum(cozum,i,j):
    cozum = cozum.copy()
    i_index = cozum.index(i)
    j_index = cozum.index(j)
    # anlatimi asagidaki gibidir (yer degistirme)
    cozum[i_index], cozum[j_index] = cozum[j_index], cozum[i_index]
    # i = 5
    # j = 4
    # takas = i
    # i = j
    # j = takas
    return cozum

baslangicCozumu = get_baslangicCozumu(isler)
objval = Objfun(isler,baslangicCozumu, show=True)
# sonuc = [7,1,5,10,2,3,4,6,8,9]

# 5 ile 10 yerini degistiriyor
komsuCozum = get_komsuCozum(baslangicCozumu, 5,10)
objval = Objfun(isler,komsuCozum,show=True)

# Tabu Search algoritmasi (baslangicCozum`e ve komsuCozum`e ihtiyaci olur)
def get_tabuStructure(isler):
    liste = {}
    # ikili kombinasyonlarini al keys tablodaki 1,2,3,4 sira kismi
    for takas in combinations(isler.keys(),2):
        liste[takas] = {'tabu_zamani':0,'hareket_objValue':0}
    return liste