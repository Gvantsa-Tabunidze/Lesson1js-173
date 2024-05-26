'use sctrict';

// Task 1:

let fruitsTropic = ['apple', 'mango', 'avocado', 'kiwi'];
fruitsTropic.splice(fruitsTropic.length - 2, 1, 'strawberry');
console.log(fruitsTropic);

// Task 2:

let info = 'good day';
let newString = info.slice(4);
console.log(newString);

// Task 3:

function getCountry(name) {
  return name.length;
}
let result = getCountry('Malaysia');
console.log(result);

// Task 4:

let arrayMix = [5, 25, 89, 120, 36];
arrayMix.push('javascript', 'python');
arrayMix.unshift('html', 'css');
console.log(arrayMix);
console.log(arrayMix.length);
arrayMix.shift();
console.log(arrayMix);
arrayMix.pop();
console.log(arrayMix);

// Task 5:

let fruits = ['orange', 'banana', 'kiwi'];
console.log(fruits.length);
fruits.push('apple', 'pineapple');
console.log(fruits);
fruits.unshift('watermelon');
console.log(fruits);
console.log(fruits.length);
fruits.splice(2, 1, 'mango');
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// Task 6:
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, 'a', 'b', 'c');
console.log(array3);

// Task 7:
let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

// Taks 8:
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, 'three');
console.log(array8);

// Task 9:
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach(function (element) {
  sum += element;
  console.log(sum);
});
