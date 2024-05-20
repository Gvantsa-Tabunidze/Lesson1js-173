// // // prompt

// // let promptResult = Number(prompt('Enter your age'));

// // if (promptResult % 2 ==0) {
// //   console.log('ლუწი');
// // } else {
// //   console.log('კენტი');
// // }

// // array
// let studentName = ['lasha', 'mariam', 'zaza', 'luka', 'nini'];
// console.log(studentName[2]);

// console.log(studentName.length);
// console.log(studentName[studentName.length - 1]);

// // nested array
// let students = ['anna', 'nini', ['nika', 'luka'], 'dato'];
// console.log(students[2][1]);


// object

// let userInfo = {
//   userName: 'anna',
//   userAge: 18,
//   userStatus: true
// }

// console.log(userInfo.userStatus);

// console.log(userInfo['userAge'])

// let userNew = {
//   userName: 'nini',
//   userAge: 25,
//   phone: {
//     code: 593,
//     tel: 4562321
//   },
//   hobbies: ['painting', 'music', 'sport'],
//   commentsUser: [
//     {
//       id: 1,
//       text: 'Hello World1'
//     },
//     {
//       id: 2,
//       text: 'Hello World 2'
//     }
//   ]
// }

// console.log(userNew.commentsUser[1].text);
// console.log(userNew['commentsUser'][1]['text']);

// let userNew2 = {
//   nameUser: 'lasha',
//   age: 17
// }

// userNew2.age = 18;
// delete userNew2.nameUser;
// userNew2.studentStatus = 'active';
// console.log(userNew2);

// loop - array

// let numbers = [14, 25, 10, 4, 18, 30];

// // 1. 
// for (let i = 0; i< numbers.length; i++) {
//   console.log(numbers[i]);
// }


// let numbersNew = [[14, 10], [25, 36], [2, 4]];

// for(let number of numbersNew) {
//   // console.log(number);
//   for (let nestedValue of number) {
//     // console.log(nestedValue);
//     if (nestedValue < 20) {
//       console.log(nestedValue);
//     }
//   }
// }


// for (let i = 0; i < numbersNew.length; i++) {
//   const element = numbersNew [i];
//   // console.log(element);
//   for (let i = 0; i < element.length; i++) {
//     const nestedArrayValue = element[i];
//     // console.log(nestedArrayValue);
//     if (nestedArrayValue > 30) {
//       console.log(nestedArrayValue);
//     }
//   }
// }




//  for of შემოკლებული ვერსია

// let names = ['anna', 'nini', 'beka'];
// for(let item of names) {
//   console.log(item);

// }



// for in

// let namesNew = ['anna', 'nini', 'beka'];

// for(let key in namesNew) {
//   console.log (key);
// }

// while loop
let namesNew2 =  ['anna', 'nini', 'beka'];

let x = 0;
while(x < namesNew2.length) {
  console.log(namesNew2[x]);
  x++;
}

// breake and continiue(for, while)

let i = 0;