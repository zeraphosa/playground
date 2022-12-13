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