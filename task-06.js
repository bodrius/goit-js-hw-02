"use strict";

let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt("Введите любое число:");
  if (input === null) {
    alert("Отменено пользователем!");
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    numbers.push(input);
  }
}

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(numbers);
alert(`Общая сумма чисел равна ${total}`);

// 1)Пользователь вводит любое число
// 2)Сохраняет в переменную это число
// 3)Сохраняет в массив это чило
// 4)Все это сохраняется до нажатия 'Cancel'
// 5)После ввода чисел нажал 'Cancel' и посчитало сумму чисел и записало в'Total'
// 6)После вывести строку и написать смс = 'Общая сумма чисел равна [сумма]'
