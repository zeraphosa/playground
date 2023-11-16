from sifre import * #yazdigim sifre.py dosyasi
sfrgr() #sifre.py daki fonksiyon
while True: #Ana menu
    print("""
    \t\t\t\tOYUNLAR - 1\n
    \t\t\t\tHAKKINDA - 2\n
    \t\t\t\tCikmak icin herhangi bir tusa basiniz.\n    
    """)
    anagiris = int(input("Islem seciniz:"))
    if anagiris == 1:
        print("""
        \t\t\t\tESINI BUL OYUNU - 1\n
        \t\t\t\tCikmak icin herhangi bir tusa basiniz.\n
        """)
        oyunlargiris = int(input("Islem seciniz:"))
        if oyunlargiris == 1:
            print("Oyuna giris yapiliyor...")
            from esinibul import * #esinibul.py dosyasi
        #elif oyunlargiris == 2:
        #    print("Oyun Yapim Asamasinda!!!")
        # \t\t\t\tTAS KAGIT MAKAS OYUNU - 2\n
        else:
            print("Cikis yapiliyor...")
            exit()
    elif anagiris == 2:
        print("""
        \t\t\t\tHAKKINDA\n
        Zaur Sharifov
        181601709
        19/05/2019
        """)
    else:
        print("Cikis yapiliyor...")
        exit()