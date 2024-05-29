'use script';

// Task 1 :
let array2 = [14, 150, 'css', null, 'javascript', 25];

let newarray2 = array2.map(function (item) {
  if (typeof item === 'number') {
    return Math.pow(item, 2);
  } else if (typeof item === 'string') {
    return item.toUpperCase();
  } else {
    return item;
  }
});
console.log(newarray2);

//  Taks 2:
let inputResult = prompt('What\'s capital of Georgia?');
console.log(inputResult);

let correctAnswer = 'tbilisi';

if (inputResult.toLowerCase(0) === correctAnswer) {
  console.log(true)
} else {
  console.log(false)
}

// Task 3:
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let array5New = array5.map((item) => item / 3);
console.log(array5New);

// Task 4:
let array1 = ['hello1', 14, 24, 'hello2'];

let numberArray = array1.filter(function (item) {
  return Number(item);
});
console.log(numberArray);

// Task 5:
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let longStrings = languages.filter(function (element) {
  return element.length > 3;
});
console.log(longStrings);

// Task 6:
let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let result = words.filter(function(item) {
  return item.includes('m')
})
console.log(result);

// Task 7:

let link = 'https://google.com';

let condition = (link) =>
  link.includes('https://') ? 'Yes includes' : 'No, does not include';
let finalResult = condition(link);
console.log(finalResult);

// Task 8:

let array6 = [-1, -2, -3, 4];

let condition1 = (number) => number > 0;
let conditionResult = array6.some(condition1);
console.log(conditionResult);

// Task 9:
let text = '12345';
let textNew = text.split('');
console.log(textNew); 

let changedArray = textNew.map(item => Number(item))
console.log(changedArray);

let sum = 0;
for (let item of changedArray) {
  sum +=item;
}
console.log(sum);


// Task 10:

let arrayNew = [12, 4, 15, 25];
 let finalOutput = arrayNew.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(finalOutput);


// Task 11:
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let combinedArray = arr1.concat(arr2).concat(arr3);
console.log(combinedArray);