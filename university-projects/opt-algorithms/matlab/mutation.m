function [arapop] = mutasyon(arapop, psize, pmutation, d, as, us)
    komsuluk = 0.05;
    % hangi genlerde mutasyon yapýlacak o belirleniyor
    rs = unifrnd(0,1,[psize,d]);
    
    for i=1:psize
        for j=1:d
            if(rs(i,j) > pmutation)
                rs2 = unifrnd(-1,1);
                arapop(i,j) = arapop(i,j)+rs2*komsuluk*(us-as);
            end               
        end
    end
end
