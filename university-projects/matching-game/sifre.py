from random import choice
import random
def sfrgr():
    
    sifre = ""
    liste = []
    alfabe = "AaBbCcDdEeFfGgHhİiJjKkLlMmNnOoPpRrSsTtUuVvYyZz1234567890"
    alfabe = list(alfabe) #liste haline getirir 'A','a'
    liste.append(alfabe)
    
    
    uzunluk = random.randint(4,15)
    
    
    for i in range(uzunluk): #kac karakter olacagini hesaplar
        for i in liste: #liste icindekilere ulasir
            sifre += str(choice(i)) #listeden random harf,sayi alip sifreye ekler
    
    
    dosya = open("sifre.txt","w")
    print("Sifreniz (sifre.txt) dosyasina gonderildi!")
    dosya.write(sifre)
    dosya.close()
    

    sifregir = input("Sifre giriniz:")
    if sifregir == sifre:
        print("Giris basarili.")
    else:
        print("Yanlis sifre girdiniz!")
        return sfrgr()