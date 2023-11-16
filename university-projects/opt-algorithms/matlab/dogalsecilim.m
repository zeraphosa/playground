function [arapop] = dogalsecilim(populasyon, obj, psize)
    %minimizasyon problemi için obj deðerleri tersine çevrildi
    obj = 1./obj
    %obj deðerlerinin toplamý alýndý
    sumobj = sum(obj);
    %obj deðerlerinin olasýlýklarý hesaplandý
    probs = obj/sumobj;
    cprobs = probs;
    
    % kümülatif toplamlarýný hesapla
    for i=2:psize
        cprobs(i) = cprobs(i-1)+probs(i);
    end
    
    % [0,1] aralýðýnda rasgele bir deðer oluþtur
    
    rs = unifrnd(0,1,[psize,1])
    
    arapop = populasyon;
    
    for i=1:psize
        idx = find(rs(i) < cprobs, 1);
        arapop(i,:) = populasyon(idx, :);
    end
    
end
