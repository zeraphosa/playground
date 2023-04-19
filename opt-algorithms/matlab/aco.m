clc;
clear;
close all;
ss = input('sehir sayisi: ');

%Problemin tanýmlanmasý
model = CreateModel(ss);

%ACO parametreleri
maxIt = 500;    %iterasyon sayýsý
nAnt = 40;      %karýnca sayýsý

alpha = 1;        %Feromon exp aðýrlýk, feromon kuvvetlendirme oraný
beta = 0.02;         %heuristic exp aðýrlýk, sezgisellik "           "

rho = 0.05;       % buharlaþma oraný

%baþlangýç
eta = 1./model.D;  %heuristik bilgi matrisi

tau = 0.1*ones(model.n, model.n);    %feromon matrisi - baþlangýç feromonu 0.1
BestCost = zeros(maxIt,1);            %en iyi çözüm

%Boþ Karýnca
empty_ant.Tour = [];
empty_ant.Cost = [];

%Karýnca Koloni Matrisi
ant = repmat(empty_ant, nAnt,1);

%En iyi karýnca
BestSol.Cost = inf;

%ACO main dongu

for it=1:maxIt
    %Bu alanda her bir karýnca için bir yol oluþturularak,Yol oluþturulurken bir sonraki
    %þehir P olasýlýðýna göre rulet çarký yöntemine göre seçiliyor. Yollarýn maliyetleri
    %hesaplanýyor.
    for k=1:nAnt
        
        ant(k).Tour = unidrnd(model.n);
        
        for l=2:model.n
            i = ant(k).Tour(end);
            P = tau(i,:).^alpha.*eta(i,:).^beta;
            P(ant(k).Tour)=0;
            P=P/sum(P);
            j=RouletteWheelSelection(P);
            ant(k).Tour=[ant(k).Tour j];
        end
        ant(k).Cost=TourLength(ant(k).Tour, model);
        
        if ant(k).Cost<BestSol.Cost
            BestSol=ant(k);
        end
    end
    
    %Feromon deðerlerin güncelleþtirilir
    for k=1:nAnt
        
        tour=ant(k).Tour;
        
        tour=[tour tour(1)];
        
        for l=1:model.n
            
            i=tour(l);
            j=tour(l+1);
            
            tau(i,j)=tau(i,j)+1/ant(k).Cost;   % feromon güncelleme formülü, maliyeti az olan yol feromon deðerini daha fazla arttýracaktýr.
            
        end
        
    end
    
    % Feromon Buharlaþtýr
    
    tau=(1-rho)*tau;
    
    % En iyi çözüm
    BestCost(it)=BestSol.Cost;
    disp(['Iter ' num2str(it) ': En iyi cozum = ' num2str(BestCost(it))]);

    figure(1);
    Ciz(BestSol.Tour,model);
    pause(0.001);
end
 
figure;
plot(BestCost,'LineWidth',2);
xlabel('Iteration');
ylabel('Best Cost');
grid on;