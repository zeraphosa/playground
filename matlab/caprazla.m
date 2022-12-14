function [arapop] = caprazla(arapop, psize, pcross, d)
    
ciftler = randperm(psize);
    
    for i=1:psize/2
        id1 = ciftler(2*i-1);
        id2 = ciftler(2*i);
        %çaprazlanacak çiftlerin kromozomlarý belirleniyor
        parent1 = arapop(id1,:);
        parent2 = arapop(id2,:);
        
        rs = unifrnd(0,1);
        
        if(pcross > rs)  % çaprazlama iþlemi uygulansýn 
            cpoint = unidrnd(d-1);
            takas = parent1(cpoint+1:end);
            parent1(cpoint+1:end) = parent2(cpoint+1:end);
            parent2(cpoint+1:end) = takas;
            
            arapop(id1,:) = parent1;
            arapop(id2,:) = parent2;
        end
    end
end
