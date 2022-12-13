from itertools import combinations
import pandas as pd
import numpy as np
import math


def veri_oku(YOL):
    return pd.read_excel(YOL, names=['is', 'agirlik', 'islem_suresi', 'bitme_zamani'], index_col=0).to_dict('index')


isler = veri_oku('exceldosyasi.xlsx')

# amac fonksiyonu toplam(Wi*Ti)


def Objfun(isler, cozum):
    dict = isler
    c_i = 0  # baslama saati
    objfun_degeri = 0
    for is_ in cozum:
        c_i += dict[is_]["islem_suresi"]
        d_i = dict[is_]["bitirme_zamani"]
        T_i = max(0, c_i - d_i)
        W_i = dict[is_]["agirlik"]
        objfun_degeri += W_i*T_i
        #print("c_i:", c_i)
        #print("d_i:", d_i)
        #print("T_i:", T_i)
    print('\n {} icin amac fonksiyonu degeri: {}\n'.format(cozum, objfun_degeri))
    return objfun_degeri


cozum1 = [1, 2, 5, 6, 8, 9, 10, 3, 4, 7]
Objfun(isler, cozum1)
# sonuc 27.090000003 olmali


def get_baslangicCozumu(isler, show=False):
    is_sayisi = len(isler)  # is sayisi
    baslangicCozumu = list(np.random.permutation(is_sayisi)+1)
    if show == True:
        print("\nBaslangic cozumu: {}".format(baslangicCozumu))
    return baslangicCozumu


def get_komsuCozum(cozum, i, j):
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
objval = Objfun(isler, baslangicCozumu, show=True)
# sonuc = [7,1,5,10,2,3,4,6,8,9]

# 5 ile 10 yerini degistiriyor
komsuCozum = get_komsuCozum(baslangicCozumu, 5, 10)
objval = Objfun(isler, komsuCozum, show=True)

# Tabu Search algoritmasi (baslangicCozum`e ve komsuCozum`e ihtiyaci olur)


def get_tabuStructure(isler):
    liste = {}
    # ikili kombinasyonlarini al keys tablodaki 1,2,3,4 sira kismi
    for takas in combinations(isler.keys(), 2):
        liste[takas] = {'tabu_zamani': 0, 'hareket_objValue': 0}
    return liste


def TSearch(isler, baslangicCozumu):
    tabu_structure = get_tabuStructure(isler)
    # print(tabu_structure)
    mevcut_cozum = baslangicCozumu
    mevcut_objvalue = Objfun(isler, baslangicCozumu)

    best_cozum = mevcut_cozum
    best_objValue = mevcut_objvalue

    iter = 0
    Terminate = 0
    while Terminate < 1:
        print('\niter: {}, mevcut_objvalue: {}, best_objvalue: {}'.format(
            iter, mevcut_objvalue(), best_objValue))
        # komsu cozumler arastiriliyor
        for komsu in tabu_structure:
            aday_cozum = get_komsuCozum(mevcut_cozum, komsu[0], komsu[1])
            aday_objValue = Objfun(isler, aday_cozum)
            tabu_structure[komsu]['hareket_objValue'] = aday_objValue
        while True:
            # komsu aday cozumler icerisinden en kucuk olani bul (minimizasyon problemleri icin)
            eniyi_degisim = min(
                tabu_structure, key=lambda x: tabu_structure[x]['hareket_objValue'])
            degisimDegeri = tabu_structure[eniyi_degisim]['hareket_objValue']
            tabu_time = tabu_structure[eniyi_degisim]['tabu_zamani']

            # eniyi degeri veren hareket degisimi tabu degilse
            if tabu_time < iter:
                # komsu ara
                mevcut_cozum = get_komsuCozum(
                    mevcut_cozum, eniyi_degisim[0], eniyi_degisim[1])
                mevcut_objvalue = Objfun(isler, mevcut_cozum)
                if degisimDegeri < best_objValue:
                    best_cozum = mevcut_cozum
                    best_objValue = mevcut_objvalue
                    print('en iyi hareket: {}, objValue: {} => En iyi hareket ile kabul edildi'.format(
                        eniyi_degisim, mevcut_objvalue))
                    Terminate = 0
                else:
                    print(
                        '\n\nmevcut en iyi cozumden daha iyi bir cozum elde edilemedi\n')
                    Terminate += 1

                # daha iyi cozume goturen hareket yapmadigi icin 3 ceza puani ekleniyor
                tabu_structure[eniyi_degisim]['tabu_zamani'] = iter + 3
                iter += 1
                break
            # hareket degisimi tabu ise
            else:
                # aspirasyon sarti belirlenebilir
                if degisimDegeri < best_objValue:
                    mevcut_cozum = get_komsuCozum(
                        mevcut_cozum, eniyi_degisim[0], eniyi_degisim[1])
                    mevcut_objvalue = Objfun(isler, mevcut_cozum)
                    best_cozum = mevcut_cozum
                    best_objValue = mevcut_objvalue
                    print('en iyi hareket: {}, objValue: {} => aspirasyon kriteri ile kabul edildi'.format(
                        eniyi_degisim, mevcut_objvalue))
                    Terminate = 0
                    iter += 1
                    break
                else:  # hareket hem tabu hem de aspirasyon sartini saglamiyor
                    tabu_structure[eniyi_degisim]['hareket_objValue'] = float(
                        'inf')
                    print('Gerceklestirilen en iyi degisim: {}, objValue: {}'.format(
                        eniyi_degisim, mevcut_objvalue))
                    continue

                print('\n\niterasyon: {} icin en iyi cozum: {}, objValue:{}'.format(
                    iter, best_cozum, best_objValue))
