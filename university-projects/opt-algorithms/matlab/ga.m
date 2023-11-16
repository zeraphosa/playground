function [eniyideger, eniyicozum] = ga(as, us, d, psize)
    pcross = 0.6;
    pmutation = 0.65;
    populasyon = unifrnd(as,us,[psize,d]);
    
    obj = zeros(psize,1);
    iter = 1;
    eniyideger = 1000000;
    
    while(iter <100000)
        for i=1:psize
            obj(i) = sum(populasyon(i,:).^2);
        end
        
        if(min(obj) < eniyideger)
            eniyideger = min(obj);
            idx = find(obj == eniyideger);
            eniyicozum = populasyon(idx,:);
        end
        objit(iter) = eniyideger;

        [arapop] = dogalsecilim(populasyon, obj, psize);
        [arapop] = caprazla(arapop, psize, pcross, d); 
        [populasyon] = mutasyon(arapop, psize, pmutation, d, as, us);
    
        iter = iter + 1;
    end 
    plot(objit);
end
