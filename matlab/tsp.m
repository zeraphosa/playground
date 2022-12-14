clc;
clear all;

fprintf('Tavlama Benzetimi ile TSP Çözümü....\n');

sehirSayisi = input('Þehir Sayýsýný Giriniz: ');

% sehirlerin birine olan uzaklýklarý simule edilecek
uzaklik = sehirEkle(sehirSayisi); 
%load('uzaklik.mat');
%sehirSayisi = length(uzaklik);

cozum = randperm(sehirSayisi);

obj = mesafeHesapla(uzaklik, cozum);

iter = 1;
objit = obj;
cozumeniyi = cozum;
objeniyi = obj;
T = 10000000;
Tend = 1;
sk = 0.99;

while(T > Tend)
    degis(1) = 0;
    degis(2) = 0;
    while (degis(1) == degis(2))
        degis = unidrnd(sehirSayisi, [1,2]);
    end
    
    komsu = cozum;
    takas = komsu(degis(1));
    komsu(degis(1)) = komsu(degis(2));
    komsu(degis(2)) = takas;
    
    obj_komsu = mesafeHesapla(uzaklik, komsu);
 
    % çözümün kabul edilip edilmemesi belirlendi   
    if(obj_komsu < obj)
        cozum = komsu;
        obj = obj_komsu;
    else
        de = obj_komsu - obj;
        rs = unifrnd(0,1);
        if(rs < exp(-de/T))
            cozum = komsu;
            obj = obj_komsu;
        end
    end

    iter = iter + 1;
    
    if(obj < min(objit))
        objit(iter) = obj;
    else
        objit(iter) = objit(iter-1);
    end
    
    if(objit(iter) < objeniyi)
        cozumeniyi = cozum;
        objeniyi = obj;
    end
    
    T = T * sk;
end
cozumeniyi
objeniyi
plot(objit)
