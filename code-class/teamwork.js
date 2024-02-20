// "Sıralı bir dizi içinde (örneğin, bir dizi içinde) tekrar eden sayıları bulun ve bu tekrar eden sayıların her biri için kaç kere tekrar ettiğini hesaplayın. Sonuçları bir obje olarak döndürün."

const arr1 = [12, 15, 2, 4, 12, 2, 7, 8, 4];
const tekrar = arr1.reduce((acc, number) => {
  acc[number] = (acc[number] || 0) + 1;
  return acc
}, {});
console.log(tekrar);
// const tekrar = arr1.filter(
//   (item, index, array) => array.indexOf(item) !== index
// );
// console.log(tekrar);

// const tekrar1 = arr1.filter((item, index) => arr1.indexOf(item) !== index)

// "Sıralı bir dizi içindeki her bir sayının, dizideki tüm önceki sayılarla çarpımını hesaplayın. Örneğin, [1, 2, 3, 4] dizisi için sonuç [1, 2, 6, 24] olmalıdır."

const sayilar = [1, 2, 3, 4];

for (let i = 1; i < sayilar.length; i++) {
  sayilar[i] = sayilar[i] * sayilar[i - 1];
}
console.log(sayilar);

//let multiple = arr[0];  //adem çözüm
// const n = array.filter((x,i=1,arr) => i<arr.length ).map((x,i=1,arr)=> multiple *= arr[i]);
// console.log(n);

// "Verilen bir dizideki her bir kelimenin uzunluğunu hesaplayarak bu uzunlukları içeren yeni bir dizi oluşturun." Örneğin ["merhaba", "dünya", "javascript"] sonucu [7, 5, 10] olamlı

const words = ["merhaba", "dünya", "javascript"];
const lenghts = [];
for (let i in words) {
  lenghts.push(words[i].length);
}
console.log(lenghts);

// ipucu --->const wordsNum = words[0].length // 7

// "Verilen bir dizideki pozitif çift sayıların karelerini alarak bu sayıları sıralı bir şekilde büyükten küçüğe doğru listeleyin."

const arr2 = [12, 15, 2, 4, 12, 2, 7, 8, 4];

const karesi= arr2.filter(number=> number>0 && number%2===0)
.map(number=> number**2).sort((a,b)=> b-a)

console.log(karesi);

const arr2Evens = [];
for (let i of arr2) {
  if (i % 2 === 0 && i > 0) {
    i = i ** 2;
    arr2Evens.push(i);
  }
}

console.log(arr2Evens.sort((a, b) => b - a));


// const numbers = [-10, -2, 8, 5, -12, 20, 17]; --------adem çözüm----------
// const result = numbers
//   .filter((x) => x > 0 && x % 2 === 0)
//   .map((y) => y ** 2)
//   .sort((a, b) => b - a);
// console.log(result);

// let myArr = [ "hello","world", "FS cohort 16!"]; myArr = myArr.map(item => item.toUpperCase());
// let cohort = myArr[2];
// cohort.toLowerCase();
// console.log(cohort);

const numbers = [15.5, 2.3, 1.1, 4.7];
const toplam = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(toplam); // Output: 23.6


