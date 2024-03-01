// function log(value) {
//   console.log(value);
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// // let value = add(10, 20);
// // log(value)

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function avrout(num1, num2) {
//     return (num1 + num2) / arguments.length
// }

// function calculate(num1, num2, calculation, callback) {
//   let value1 = calculation (num1, num2);
//   callback(value1);
// }

// calculate(10, 20, avrout, log);

// function getPositiveNums(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0 && !(arr[i] % 2)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(getPositiveNums([0, -2, 1, -3, -4, -5, 6, -7, 8, 9, 10]));

// function getNegativeNums(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0 && arr[i] % 2) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(getNegativeNums([0, -2, 1, -3, -4, -5, 6, -7, 8, -9, -10]));

const nums = [0, 2, 1, 3, 4, -5, 6, -7, 8, -9, -10];

function getPositiveNums(element) {
  if (element >= 0 && !(element % 2)) {
    return true;
  }
}

function getNegativeNums(element) {
  if (element < 0 && element % 2) {
    return true;
  }
}

function genNum(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(genNum(nums, getPositiveNums));

console.log(genNum(nums, (element) => element < 0));

// console.log(filteredNums);

//forEach
// console.log(nums.forEach((element) => element + 2));
// nums.forEach((element) => console.log(element + 2));

//map
// const filteredByMapArr = nums.map((element) => element * 3);
// console.log(filteredByMapArr);
// nums.map((element) => console.log(element * 2));

//filter
const filteredNums = nums.filter((element) => element % 2 === 0);
// console.log(filteredNums);
