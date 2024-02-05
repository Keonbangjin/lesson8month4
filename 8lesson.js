///1-MASALA////

//1//
let person = {name:"Abdulloh",
age: 19,
job: 'footballer',
interest:"game",
hobby :"sleep",
number : +998993562705,
username: "au"}

console.log(Object.keys(person))
console.log(Object.values(person))

//2///

let person1 = {name: "Abdulloh",
age: 19}
let person2 = {hobby : "football",
interest: "sleep"}

let persons = Object.assign(person1, person2);
console.log(persons);

//3//

let numArray = [10, 20, 30, 40];

let lastNumber = numArray[numArray.length - 1];

let newNumber = lastNumber + 1;

numArray.push(newNumber);

console.log(numArray);

//4//
function manArray(arr) {
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let BirinchiValue = arr[0];
  if (BirinchiValue % 2 === 0) {
      arr.unshift(BirinchiValue);
  } else {
      arr.push(BirinchiValue);
  }
  return { manArray: arr, sum: totalSum };
}

let myArray = [1, 2, 3, 4, 5];
let result = manArray(myArray);

console.log(myArray);
console.log(result.manArray);
console.log(result.sum);


//5//

let myArray = [1, 2, 3, 4, 5];

[myArray[0], myArray[myArray.length - 1]] = [myArray[myArray.length - 1], myArray[0]];

console.log(myArray);

//6//

function promptString(wordsArray, urinish) {
  if (urinish === 0) {
      console.log("Kiritilgan so'z:", wordsArray);
      return;
  }

  let word = prompt(`So'z kiriting (${urinish} ta urinish bor):`);

  wordsArray.push(word);

  promptString(wordsArray, urinish - 1);
}

promptString([], 6);

//7//

//2-masala//


//4///

function NumandSum(numbersArray, urinish) {
  if (urinish === 0) {
    console.log("Kiritilgan sonlar:", numbersArray);

    let sum = numbersArray.reduce((total, num) => total + Number(num), 0);
    console.log("Yig'indi:", sum);

    return;
  }

  let number = prompt(`(${urinish} marta urinish mavjud):`);
  numbersArray.push(Number(number));

  NumandSum(numbersArray, urinish - 1);
}

NumandSum([], 4);

//5//

const obj1 = {name: "Abdulloh"}
const obj2 = {age:19}

let persons = Object.assign(obj1, obj2);
console.log(persons);
console.log(Object.values(persons))

//3//
let obj = { name: "John", age: "30", job: "Mechanic", study: "none", travel: "US" };

let Keys = Object.keys(obj);
let arrayLength = Keys.length;

console.log(Keys);
console.log(arrayLength);

//2//
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
function numArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function same(arr1, arr2) {
  const numArrayResult = numArray(arr1, arr2);

  if (numArrayResult) {
    arr1 = arr1.concat(arr2);
    arr2 = arr2.concat(arr1);
  }

  return { arr1, arr2 };
}
let result = same(array1, array2);

console.log( array1);
console.log( array2);
console.log(result.arr1);
console.log(result.arr2);

//1//

let Input = prompt("Istalgan string kiriting:");

let myArray = [];
myArray.push(Input);

console.log(myArray);
