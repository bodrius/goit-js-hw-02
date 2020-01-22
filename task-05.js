"use strict";

const checkForSpam = function(message) {
  message = message.toLowerCase();
  if (message.includes("sale") || message.includes("spam")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); 

console.log(checkForSpam("JavaScript weekly newsletter")); 

console.log(checkForSpam("Get best sale offers now!")); 

console.log(checkForSpam("[SPAM] How to earn fast money?")); 

// const words = ['Let', 'best', 'sale', 'offers', 'now'];
// const checkWords = words.includes('offers');
// console. log(checkWords);

// 1) нужно привести меседж к нижнему регистру
// 2) сделать ветвление  в нем условия на содержание "sale" или "spam" через includes
// 3) вывести правду и в противном случае не правду
