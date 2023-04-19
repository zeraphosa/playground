import numpy as np
from scipy.optimize import linprog

# maximize z = 3x1 + x2
# 3 adet kisitimiz ve 2 adet degiskenimiz var
# 0*x1 + x2 <= 5
# x1+x2<=10
# x1-x2<=2
# x1,x2>=0

# Ilk katsayilar kisitlara ait katsayilar
# 3 adet kistimiz ve 2 adet degiskenimiz var.
# Bu nedenle 3e 2 bir matris olusturuyoruz.

A = np.array([[0, 1], [1, 1], [1, -1]]) # x1,x2`nin onundeki katsayilar
# print(A)

b = np.array([5, 10, 2])  # tek boyutlu bir vektor (3,1) || kisitlarin sonuclari
# c = np.array([3,1]) amac fonksiyonumuzdaki karar degiskenleri
# scipy default olarak min yapar maksimizasyon yapmak icin eksili halini aliyoruz
c = np.array([-3, -1]) # fonksiyondaki x1,x2 `nin katsayisi

# A yani kisitlara ait katsayilar <= ise upper bound kullaniyoruz.
sonuc = linprog(c=c, A_ub=A, b_ub=b, method='simplex', bounds=[0, None])
# x1,x2 >= 0 buyuk esit oldugu icin bounds 0 ve sonsuz pozitif gidiyor
# x1,x2 = olsaydi A_eq, b_eq gibi olcakti
print(sonuc)

# scipy `in icindeki linprog varsayilan olarak minimizasyon yapmaya calisir.
# print(sonuc.fun)
# print(sonuc.x)