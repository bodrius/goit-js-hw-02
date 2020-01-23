"use strict";

const formatString = function(string) {
  return string.length > 40 ? string.slice(0, 40) + "..." : string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

// =============     ВТОРОЙ ВАРИАНТ РЕШЕНИЯ

// const formatString = function(string) {
//     if(string.length > 40){
//         let editedText = string.slice(0,40) + '...';
//         return editedText;
//     }
//     else{
//         return string;
//     }
//   }

//   console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
//   console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//   console.log(formatString('Curabitur ligula sapien.'));
//   console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', ),);
