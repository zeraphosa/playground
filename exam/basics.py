import math
import numpy as np
from scipy.optimize import linprog

# getradius - yaricap al ----
while 1:
    r = float(input("yaricap degeri gir:"))
    if (r < 0.0):
        print("Tekrar deneyin \n")
        continue
    else:
        break
alan = math.pi * math.pow(r, 2)
print("Alan: " + str(alan))

# random value ----
boyut_ = np.random.randint(10, 20)

# permutation - kombinasyonel olasilik ----
boyut = np.random.randint(10, 20)
elemanSayisi = 5
dolasimMatrisi = np.arange(elemanSayisi * boyut).reshape((elemanSayisi, boyut))
for i in range(0, elemanSayisi):
    dolasimMatrisi[i] = np.random.permutation(boyut)+1
print("dolasimMatrisi", dolasimMatrisi)

# tsp - gezgin satici problemi icin matris olusturma ----
boyut__ = np.random.randint(10, 20)
tsp = np.zeros((boyut__, boyut__))
for i in range(0, boyut__):
    for j in range(i+1, boyut__):
        tsp[i, j] = np.random.uniform(0, 10)
        tsp[j, i] = tsp[i, j]
print("Tsp:", tsp)

# -------------------------------------------------------------------
# dp - dogrusal programlama "from scipy.optimize import lingprog"
a = np.array([[0, 1], [1, 1], [1, -1]])
b = np.array([5, 10, 2])
c = np.array([-3, -1])
sonuc = linprog(c=c, a_ub=a, b_u=b, method="simplex", bounds=[0, None])
print(sonuc)
