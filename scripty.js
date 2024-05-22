'use strict';

// Task 1:

function getTotal(...numbers) {
  let sum = 0;
  for (let index of numbers) {
    sum += index;
  }
  return sum;
}

let result = getTotal(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);

// Task 2:
let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true,
};

let getUserInfo = () => {
  let output =
    user.isloggedin === true
      ? `${user.firstname} ${user.lastname} ${user.isloggedin}`
      : false;
  return output;
};

let summary = getUserInfo();
console.log(summary);

// Task 3:
let getNumber = (...numbers) => {
  for (let index of numbers) {
    return Math.max(numbers);
  }
};
let output = getNumber(Math.max(25, 15, 84, 5, 23, 94, 20));
console.log(output);

// Task 4:

let numberType = (number) => {
  if (number % 2 == 0) {
    return 'this number is even';
  }
  return 'this number is odd';
};

let numberOutput = numberType(356);
console.log(numberOutput);

// Task 5:
let array = [1, 2, 3, 4, 5];
array.reverse();
for (let i of array) {
  console.log(i);
}

// Task 6:

let getAgeType = (userAge) => {
  let ageInfo = userAge > 18 ? 'სრულწლოვანი' : 'არასრულწლოვანი';
  return ageInfo;
};
let ageOutput = getAgeType(31);
console.log(ageOutput);
