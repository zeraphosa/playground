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

    while Tend < T:
        degisim_miktari = get_DegisimMiktari(-(ust_sinir - alt_sinir)*delta/2, (ust_sinir - alt_sinir)*delta/2,d)
        cozum =get_Cozum(d)
        komsu = cozum + degisim_miktari
        obj_komsu = get_Obj(komsu)

        if(obj_komsu < obj):
            obj = obj_komsu
        else: # Probability of acceptance
            # amac fonksiyonunun ne kadar kotulestigini olcer pa: p(deltaE,T)= e ussu (-deltaE/T)
            de = obj_komsu - obj
            pa = np.exp(-de/T)
            rs = np.random.uniform(0,1)

            if(rs<pa):
                cozum = komsu
                obj = obj_komsu
        T = T*sk
        iterasyon = iterasyon + 1

        if(obj< np.min(array_obj)):
            array_obj.append(obj)
            array_iterasyon.append(iterasyon)

        if(obj<objeniyi):
            objeniyi = obj
            cozumeniyi=cozum
    return cozum, obj, iterasyon, array_obj,array_iterasyon

cozum, obj, iterasyon,array_obj,array_iterasyon = app(-5,5,6,0.1,1000,0.1,0.9)

print("cozum -> ",cozum)
print("iterasyon -> ", iterasyon)
print("obj -> ",obj)