forEach
let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103]

1)Butun deyisenleri ekrana yazdirin        
2)Butun saylari topla ve ekrana yazdirin
3)Arrayin icerisindeki butun stringleri tapin, boyuk herfe cevirin ve yeni arrayi capa verin
4)butun musbet ededleri tap ve ekrana yazdir
5)arrayi tersine cevirib gonder
6)butun cut ededleri ekrana yazdir
7)butun stringlerin uzunlugunu tap ve "string-length" seklinde ekrana yazdir
8)butun reqemleri iki ile vure ekrana yazdir

-------------------------------------------------------------------------------------------------------------------

Map (hem for hem foreachle yaz ferqi basa dusmek ucun)

let arr=[4,48,13,53,-29,103]
1)her bir elementi iki misli olan yeni bir array yarat
2)her bir elementi 100 ile toplayib yeni bir array yarat
let arr=["apple", "banana", "orange", "fexreddin", "niyameddin"]
3)arrayin her bir deyiseninin ilk herfini ozunde saxlayan yeni bir array yarat. Output:["a","b","o","f","n"]
4)ele bir yeni array qaytarki, ayri-ayri arraylerin icerisinde birinci deyisen hemin arrayin elemntinin butun herfleri boyuk olsun ve ikinci deyisen ise hemin deyisenlerin length-lerini gostersin. Numune output:

[
    ["APPLE",5],
    ["BANANA",6],
    ["ORANGE",6],
    ["FEXREDDIN",9],
    ["NIYAMEDDIN",10]
]

5)let arr=[
    ["flag","dance",48],
    [23,45,6,78,54,23,1,9,10,"azerbaijani"],
    [true, "boolean", "turkish"],
    ["adele","fero","imi","ibo",100],
    ["java","summer","spring"]
] 
arrayinin icindeki deyisenlerin uzunlugunu qaytaran yeni bir array yarat. Output: [3, 10, 3, 5, 3]


------------------------------------------------------------------------------------------------------------------
Find

let arr=["java","summer","spring","adelel","fero","imi","ibo"]
1)"java" deyisenini tap
2)length-i 6-ya beraber olan deyiseni tap
3)
let arr=[
    {name:"Feramiz",age:20,isMarried:false,id:1},
    {name:"Mahmud",age:24,isMarried:true,id:2},
    {name:"Adil", age:32, isMarried:true,id:3},
    {name:"Imran", age:29, isMarried:false,id:4},
    {name:"Ibrahim",age:19, isMarried:false,id:5}
]
Arrayin Ibrahim adli sexsin evlilik statusunu tapin
4)Adil adli sexsi tapib evlilik statusu true-dursa false edin, falsedursa true edin
5)Mahmud adli sexsi tapib ona yeni work adli property elave et ve deyeride "Java developer olsun"

-------------------------------------------------------------------------------------------------------------------

Filter

let arr=[15,19,23,12,4,2,49,25,1,-20,103,-59,13]
1)butun musbet ededleri qaytaran yeni array yarat
2)butun menfi ededleri qaytaran yeni array yarat
3)20-den boyuk olan butun ededleri qaytaran yeni bir arrray yarat
4)20-den boyuk olan ededleri tap ve her birini 100-e vur
let arr=["java","summer","spring","adelel","fero","imi","ibo"]
5)length-i 6-ya beraber olan deyisenleri tap ve yeni bir array yarat
6)
let arr=[
    {name:"Feramiz",age:20,isMarried:false,id:1},
    {name:"Mahmud",age:24,isMarried:true,id:2},
    {name:"Adil", age:32, isMarried:true,id:3},
    {name:"Imran", age:29, isMarried:false,id:4},
    {name:"Ibrahim",age:19, isMarried:false,id:5}
]
evlilik statusu false olanlar qaytaran yeni array yarat
7) evlilik statusu false olanlari ekrana cixart(li teqleri vasitesile)
8)evlilik statuslari false olanlari tap ve hamisinin evlilik statuslarini true-ya cevir