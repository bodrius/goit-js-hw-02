"use strict";

const findLongestWord = function(string) {
  const words = string.split(" ");
  let longestWord = words[0];
  
  for (let i = 1; i < words.length; i ++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

// ======================ВТОРОЙ ВАРИАНТ РЕШЕНИЯ

// const findLongestWord = function(string) {
//     const words = string.split(" ");
//     let longestWord = words[0];

//   for (const word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'