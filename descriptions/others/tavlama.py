import numpy as np
import matplotlib.pyplot as plt

def get_Cozum(d):
    cozum = np.random.uniform(-1,0,d)
    return cozum

def get_Obj(cozum):
    obj = np.sum(cozum**2)
    return obj

def get_DegisimMiktari(alt_sinir, ust_sinir, d):
    degisimMiktari = np.random.uniform(alt_sinir, ust_sinir,d)
    return degisimMiktari

def app(alt_sinir,ust_sinir,d,delta,T,Tend,sk):
    array_obj=[]
    array_iterasyon=[]
    iterasyon = 1
    array_iterasyon.append(iterasyon)
    cozum = get_Cozum(d)

    obj= get_Obj(cozum)
    array_obj.append(obj)

    objeniyi = obj #son
    cozumeniyi = cozum #son