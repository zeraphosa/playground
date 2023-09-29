// forEach
// let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103]

// 1)Butun deyisenleri ekrana yazdirin
// 2)Butun saylari topla ve ekrana yazdirin
// 3)Arrayin icerisindeki butun stringleri tapin, boyuk herfe cevirin ve yeni arrayi capa verin
// 4)butun musbet ededleri tap ve ekrana yazdir
// 5)arrayi tersine cevirib gonder
// 6)butun cut ededleri ekrana yazdir
// 7)butun stringlerin uzunlugunu tap ve "string-length" seklinde ekrana yazdir
// 8)butun reqemleri iki ile vure ekrana yazdir

let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103];

// 8
// arr.forEach(item => Number(item) && console.log(item * 2))

// 7
// arr.forEach((item) => String(item) && console.log("string-length:",item, item.length));

// 6
// arr.forEach((item) => item % 2 == 0 && console.log(item));

// 5
let newArr = [];
arr.forEach((item) => {
  newArr.push(arr.unshift());
});
console.log(newArr);

// 4
// arr.forEach((item) => {
//   if (typeof item == "number" && item >= 0) {
//     console.log(item);
//   }
// });

// 3
// let newArr = [];
// arr.forEach((item) => {
//   if (item / 1 != item) {
//     newArr.push(item.replace(item[0], item[0].toLocaleUpperCase()));
//   }
// });
// console.log(newArr);

// 2
// let sum = 0;
// arr.forEach((item) => {
//   if (item / 1) {
//     sum += item;
//   }
// });
// content.innerHTML = sum;

// 1.
// arr.forEach((item) => {
//     content.innerHTML += `<div>${item}</div>`
// });
