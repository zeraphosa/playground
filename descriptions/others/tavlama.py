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