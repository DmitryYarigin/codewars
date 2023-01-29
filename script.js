// 1) Capitalization and Mutability

function capitalizeWord(word) {
    // let wordSplit = word.split('');
    // // console.log(wordSplit);
    // wordSplit[0] = wordSplit[0].toUpperCase();
    // console.log(wordSplit[0]);
    // wordSplit = wordSplit.join('');
    // return wordSplit;

    // другой вариант
    // return word[0].toUpperCase() + word.slice(1);

    // еще вариант
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }

// console.log(capitalizeWord("maria"));

// 2) Century From Year

function century(year) {
  // return Math.ceil(year/ 100);
  // еще вариант
  return year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) +1;
}

// console.log(century(2134));

// 3) Convert a Number to a String!

function numberToString(num) {
  return num.toString();
  // можно еще `${num}` и ''+num и String(num)
}

// console.log(numberToString(21));

// 4) Convert a String to a Number!

const stringToNumber = function(str){
  // return +str;
  // или
  return Number(str);//  или parseInt(str);
}

// console.log(stringToNumber("123"));

// 5) Convert to Binary

function toBinary(n){
  return Number(n.toString(2)); // можно вместо Number добавить parseInt или +
}

// console.log(toBinary(23));

// console.log(typeof toBinary(23));

// 6)  Fake binary
function fakeBin(x){
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  // return x.split('').map(element => element < 5 ? 0 : 1).join('');
  
}

// console.log(fakeBin('473'));

// 6) Largest Square Inside A Circle

// 7) Take an Arrow to the knee, Functionally
var ArrowFunc = function(arr) {
  return arr.map(el => String.fromCharCode(el)).join(''); //Complete this function
}

// 8) Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  arr3 = arr1.concat(arr2).sort((a, b) => a - b);
  arr3 = arr3.filter((item, index) => {
    return arr3.indexOf(item) === index;
  });
  return arr3;
}

// console.log(mergeArrays([4, 5, 6, 11], [1, 2, 3, 6]));

// 9) 16+18=214
// пробывал ничего не получилось, посмотрел в ютубе как делают 
function add(num1, num2) {
  num1 = num1.toString().split('').reverse();
  num2 = num2.toString().split('').reverse();
  let max = Math.max(num1.length, num2.length);
  let arr = []

  for (let i = max - 1; i >= 0; i--) {
      arr.push((Number(num1[i]) || 0) + (Number(num2[i]) || 0)); 
  }
    return Number(arr.join(''));
  };

// console.log(add(1222, 30277));

// 10) Add property to every object in array

var questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0
}];

questions.forEach((el) => {
  el["usersAnswer"] = null;
});


// console.log(questions);

// 11) Colour Association

function colourAssociation(array){
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let newObject = {};
    let key = array[i][0];
    let value = array[i][1];
    newObject[key] = value;
    newArr.push(newObject);
  }
  return newArr
}
// можно еще решить с помощью map
// array.map(([colour, association]) => ({[colour]:association}));


// console.log(colourAssociation([["white", "goodness"],["green", "great"]]));

// 12) Combine objects

const objA = {a: 10, b: 15};
const objB = {a: 5,  b: 20};
const objC = {d: 5,  f: 20};


function combine(...obj) {
  let comboObj = {};
  for(let i = 0; i < obj.length; i++) {
    for(let key in obj[i]){
      if(comboObj[key]) {
        console.log(comboObj[key]);
        comboObj[key] += obj[i][key];
      }
      else {
        comboObj[key] = obj[i][key];
      }

    }
  }
  return comboObj;
}

// console.log(combine(objA, objB, objC));

// 13) Count the Digit

function nbDig(n, d) {
  // let numToString = n.toString();
  // let arr = [];
  // let result = 0;
  // for (let i = 0; i <= numToString; i++) {
  //   arr.push(i**2);
  // };

  // let joinArr = arr.join('');
  // for (let i = 0; i < joinArr.length; i++) {
  //   if(joinArr[i] == d) result++;
  // }
  // return result;
// }
// можно было так
  let o = '';
    for(let i = 0; i <= n; i++) {
      o += Math.pow(i, 2);
    }
    // console.log(o.split(d));
    return o.split(d).length -1;
}
// console.log(nbDig(10, 1));

// 14) Find the missing element between two arrays

// function findMissing(arr1, arr2) {
//   let arr1Sort = arr1.sort();
//   let arr2Sort = arr2.sort();
//   for (let i = 0; i < arr1Sort.length; i++) {
//      if(arr1Sort[i] != arr2Sort[i]) return arr1Sort[i];
//     }
// }
// можно было так

const sum = arr => arr.reduce((a, b) => a + b, 0);
const findMissing = (arr1, arr2) => sum(arr1) - sum(arr2)

console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));

