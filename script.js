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
