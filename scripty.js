// Task 1
'use strict';

for (let i = 5; i <= 100; i++) {
  console.log(i);
}

// Task 2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let number of array1) {
  // console.log(number);
  if (number > 0 && number < 10) console.log(number);
}

// Task 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numbers of array2) {
  // console.log(numbers);
  if (numbers == 5) {
    console.log('არის');
    break;
  }
}


// // Task 6
let array5 = [1, 2, 3, 7, 6, 9];

for (let newNumber of array5) {
  if (newNumber == 7) {
    continue;
  }
  console.log(newNumber);
}

// Task 7
let user = {
  firstname: 'giorgi',
  lastname: 'smith',
  age: 25,
  studentStatus: 'active',
};
console.log(user.studentStatus);

// Task 8
let user2 = {
  name: 'anna',
  age: 20,
  studentStatus: 'active',
};

// // Condition with if statement
if (user2.age < 18 && user2.studentStatus == 'active') {
  console.log('hello user');
} else if (user2.name == 'levani') {
  console.log('hello levani');
} else if (user2.name == 'anna') {
  console.log('hello anna');
} else {
  console.log(Error);
}

// Condition with ternary operator
let result =
  user2.age < 18 && user2.studentStatus == 'active'
    ? 'hello user'
    : user2.name == 'levani'
    ? 'hello levani'
    : user2.name == 'anna'
    ? 'hello anna'
    : 'error';
console.log(result);

// Task 9

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let number of array6) {
  // console.log(number);
  if (number % 2 == 0) {
    console.log(number);
  }
}

//  Task 10
let users = [
  {
    username: 'giorgi',
    status: false,
  },
  {
    username: 'levani',
    status: false,
  },
  {
    username: 'anna',
    status: true,
  },
];

// console.log(users[2]);

if (users[0].status == true) {
  console.log(users[0]);
} else if (users[1].status == true) {
  console.log(users[1]);
} else if (users[2].status == true) {
  console.log(users[2]);
}

// Task 11
let array7 =  [32, 14, null, '40', 50];
for( let element of array7) {
  // console.log(Number(element));
  if(element % 5 ==0) {
    console.log(Number(element));
  }

}

// Task 12
let array8 = [[2, -3, 5, 11], [1, -35, -11], [12, -36, -24]];
for (let i = 0; i < 3; i++) {
  const element = array8[i];
  // console.log(element);
  for (let index = 0; index < element.length; index++) {
    const nestedArrayValue = element[index];
    if (nestedArrayValue > 0) {
      console.log(nestedArrayValue);
    }

  }
}


// Missing Task 4 and Task 5.



