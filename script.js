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
// решил прямо в браузере по-быстрому

//  6) Largest Square Inside A Circle

function areaLargestSquare(r) {
  let s = 2 * (r**2)
  return s;
}

// console.log(areaLargestSquare(7));

// 7) Number of Decimal Digits

// function digits(n) {
//   return n.toString().length;
// }

// 8) Opposite number

function opposite(number) {
  return number != 0 ? number * -1 : "error";
  // или return -number
}

// 9) Perimeter sequence

function perimeterSequence(a,n) {
  return a * n * 4;
}

// 10) Remove First and Last Character

function removeChar(str){
  strSplit = str.split('');
  console.log(strSplit);
  strSplit.splice(0, 1);
  strSplit.splice(strSplit.length - 1, 1);

  return strSplit.join('');
  // а можно было str.sliece(1, -1)
};

console.log(removeChar("catty"));



