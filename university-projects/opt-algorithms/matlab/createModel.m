function model = CreateModel(ss)

    x = unidrnd(100,[1,ss]);
    y = unidrnd(100,[1,ss]);
        
    D = zeros(ss,ss);
    
    for i=1:ss-1
        for j = i+1:ss
            D(i,j) = sqrt((x(i)-x(j))^2+((y(i)-y(j))^2));
            D(j,i) = D(i,j);
        end
    end
    
    model.n = ss;
    model.x = x;
    model.y = y;
    model.D = D;
end
