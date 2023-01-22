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

console.log(fakeBin('473'));

// 6) Largest Square Inside A Circle
