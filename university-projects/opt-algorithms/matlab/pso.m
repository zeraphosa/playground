lemsizlik kaysayýsý. eski hýzýný ne kadar korumak istiyor.

    % rasgele bir sürü oluþturuldu 
    swarm = unifrnd(as,us,[ssize,d]);
    obj = zeros(ssize,1);
    
    % sürüdeki her bir parçacýk için obj deðerleri hesaplandý
    for i=1:ssize
        obj(i) = sum(swarm(i,:).^2);
    end
    
    % hýz matrisi oluþturulacak, pbest ve gbest deðerleri bulunacak
    velocity = zeros(ssize,d);   % baþlangýç hýzý 0
    
    pbest = swarm;   % baþlangýç en iyi deðerleri kendi deðerleri
    eniyiObj = obj;
    sbestval = min(obj);
    idx = find(sbestval==obj);
    gbest = swarm(idx,:);    % obj içerisindeki en küçük deðere sahip indexe göre deðerler
    iter = 1;
    objit = sbestval;
    while(iter<250)
        for i=1:ssize
                r1 = unifrnd(0,1);
                r2 = unifrnd(0,1);
                velocity(i,:) = w*velocity(i,:)+c1*r1*(pbest(i,:)-swarm(i,:))+c2*r2*(gbest-swarm(i,:))
        end

        swarm = swarm+velocity;

        for i=1:ssize
            for j=1:d
                if(swarm(i,j) > us)
                    swarm(i,j) = us;
                elseif(swarm(i,j) < as)
                    swarm(i,j) = as;
                end
            end
        end
        % sürüdeki her bir parçacýk için obj deðerleri hesaplandý
        for i=1:ssize
            obj(i) = sum(swarm(i,:).^2);
        end
        %parçacýklar için en iyi deðerleri bul
        for i=1:ssize
            if(obj(i) < eniyiObj(i))
                eniyiObj(i) = obj(i);
                pbest(i,:) = swarm(i,:);
            end
        end
        %gbest deðerini hesapla
        if(min(obj) < sbestval)
            sbestval = min(obj);
            idx = find(sbestval==obj);
            gbest = swarm(idx,:);
        end
        iter = iter+1;
        objit(iter) = sbestval;
    end
   plot(objit);
end
