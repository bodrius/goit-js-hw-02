"use strict";

const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(" ");
  const length = words.length;

  return length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

// ======================ВТОРОЙ ВАРИАНТ РЕШЕНИЯ

// const calculateEngravingPrice = function(message, pricePerWord) {
//   let total = 0;
//   const words = message.split(' ');
//   total = words.length * pricePerWord;

//   for (const i of words) {
//     total += pricePerWord;
//   }

//   return total;

// };

// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   );

//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   );

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
//   );

//   console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
//   );
