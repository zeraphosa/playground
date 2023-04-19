from tkinter import *
from random import random
import time
from tkinter import messagebox

pencere = Tk() #tkinter pencere actim

hafiza = []

global bilinen #8 eslesen deger var hepsi bilindiginde mesaj vermesi icin 
bilinen = 0

def cevir(a):
	#print(a) butonlarin adresi

	if len(hafiza) == 0: #hafiza bossa
		for i in atananlar:
			if a == i[0]: # atananlarda bulunan 0. index buton adresleri
				ilkbuton = i[2] #atananlar 2.index buton
				ilkbuton.config(text = i[1],state = "disable")
				hafiza.append(i) #hafiza ilk tikladigim butonu ekledim
	else: #hafiza doluysa ikinci buton islemlerine gec, burda buton degerlerini karsilastirdim
		for i in atananlar:
			if a == i[0]: #ikinci buton adresi
				ikincibuton = i[2]
				ikincibuton.config(text = i[1],state = "disable") #tiklanamaz hale getiirir
				if i[1] == hafiza[0][1]: #hafizadaki degerle karsilastirma
					global bilinen
					bilinen = bilinen + 1 #bilinen sayisi articak
					hafiza.clear() #dogru buton bulundugunda hafizayi siler
					if bilinen == 8: #hepsi bilindiginde
						messagebox.showinfo("Esini bul oyunu","Tebrikler.") #tebrikler yazdirir
				else: #hafizadaki degerle 2.ci secilmis deger ayni degilse
					#eski haline gorunmeyen haline dondurmek icin
					ikincibuton.after(100,lambda x = i[2]:cevirici(x)) #100ms sonra butonu cevirici fonskiyon ile cevirsin

def cevirici(ikincibuton): #butonu ters ceviren fonksiyon (gorunmez hali)
	ilkbuton = hafiza[0][2]
	ilkbuton.config(text = "???",state= "active")

	ikincibuton.config(text= "???",state= "active")
	time.sleep(0.5)
	hafiza.clear()

icindekiler = [1,2,3,4,5,6,7,8]
icindekiler = icindekiler*2 #16 tane cift sayi olmasi icin
#atananlar buton icin
atananlar = []
#for dongusu pencerede satir ve sutundaki butonlari yerlestirmek icin 
#4x4 matrix
satirno = 0
for satir in range(0,4): #4satir
	sutunno = 0
	for sutun in range(0,4): #4sutun

		deger = len(icindekiler)
		ilkdeger = str(satirno)+str(sutunno) #penceredeki buton adresleri (0,1) (3,3) gibi
		ikincideger = int(random()*deger) #uzunlugu 16 olan listeden 1 random sira no buluyor
		#print(satir,sutun)
		buton1 = Button(pencere,text = "???",command = lambda a = ilkdeger: cevir(a))
		atanacak = (ilkdeger,icindekiler[ikincideger],buton1) #buton adresi,icerikler,buton
		atananlar.append(atanacak)
		#print(atananlar)
		icindekiler.pop(ikincideger) 


		buton1.grid(row=satirno,column=sutunno) #butonu yerlestirmek icin grid kullndim 
		sutunno = sutunno + 1
	satirno = satirno + 1
#print(satir,sutun)
pencere.mainloop() #tkinter penceresinin ekranda kalmasi icin