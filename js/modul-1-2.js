// const greenApple = 20;
// const redApple = 50;

// let resultValue = `Если сложить ${greenApple} зеленых и ${redApple} красных яблок, сколько яблок получится? Верно ${
//   greenApple + redApple
// } штук`;

// console.log(resultValue);

// console.log( true && (4 || false && 2) && 5 )

// let clientCount = 2;
// const maxClient = 2;
// while (clientCount < maxClient) {
//   clientCount += 1;

//   console.log('clients in da hauz: ', clientCount);
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

//! Парсі строки
// let objWidht = '566px';

// objWidht = Number.parseFloat(objWidht);

// console.log(typeof objWidht, objWidht);

// let zp = 23346.454566756;

// zp = Number(zp.toFixed(2));

// console.log(typeof zp, zp);

// const base = prompt('Введи число');
// const pover = prompt('Введи степень');

// const result = Number.parseFloat(base) ** Number.parseFloat(pover);

// console.log(`При возведении числа ${base} в степень ${pover}, получим ${result}`);

/*
! Задача: найти все значения диапазона, которые кратн числу в переменной divider
! Результат должен быть при любых целых значениях переменных max, min, divider. 
*/

// let max = 13;
// let min = 3;
// const divider = 3;
// console.log('start');

// while (min % divider !== 0) {
//   min += 1;
// }
// while (max % divider !== 0) {
//   max -= 1;
// }

// for (let i = min; i <= max; i += divider) {
//   console.log(i);
// }

// console.log('end');

//! Расчет общей суммы ЗП для работников. ЗП для каждого генерится рандомно.
// console.log('start');

// const emploees = 10;
// let totalSalary = 0;
// let salary;

// const salaryMax = 5000;
// const salaryMin = 500;

// for (let i = 1; i <= emploees; i += 1) {
//   salary = Number((Math.random() * (salaryMax - salaryMin) + salaryMin).toFixed());
//   totalSalary += salary;

//   console.log(`ЗП работника ${i}: ${salary} грн`);
// }
// console.log(`ИТОГО: ${totalSalary} грн`);

// console.log('end');

//! Чья шиикоадка.

// const championsMin = 1;
// const championsMax = 10;
// let winnerName;

// const winner = Number((Math.random() * (championsMax - championsMin) + championsMin).toFixed());

// switch (winner) {
//   case 1:
//     winnerName = `Иииииии ПОБЕДИТЕЛЬ: Артем. Забери свою Ши-Ка-Лад-Ку!`;
//     break;

//   case 2:
//     winnerName = `Иииииии ПОБЕДИТЕЛЬ: Сергей. Забери свою Ши-Ка-Лад-Ку!`;
//     break;

//   case 3:
//     winnerName = `Иииииии ПОБЕДИТЕЛЬ: Алексей. Забери свою Ши-Ка-Лад-Ку!`;
//     break;
//   default:
//     winnerName = 'Так не достанься ты НИКОМУ!';
// }

// console.log(winnerName);

//! Чи суп - Чи борщ

// const championsMin = 1;
// const championsMax = 6;
// let winnerName;

// const winner = Math.round(Math.random() * (championsMax - championsMin) + championsMin);

// switch (winner) {
//   case 1:
//     winnerName = `Борщ`;
//     break;

//   case 2:
//     winnerName = `Суп полевой`;
//     break;

//   case 3:
//     winnerName = `Харчо`;
//     break;

//   case 4:
//     winnerName = `Суп с макаронами`;
//     break;

//   case 5:
//     winnerName = `???`;
//     break;

//   case 6:
//     winnerName = `???`;
//     break;

//   default:
//     winnerName = 'Чай';
// }

// console.log(winnerName);

//! Сумма четных чисел в диапазоне

// let min = 333;
// const max = 10000;
// let total = 0;

// console.time('FirstWay');

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(`Сумма всех четных чисел в диапазоне от ${min} до ${max} будет: ${total}`);
// console.timeEnd('FirstWay');

// console.time('SecondWay');

// while (min % 2 !== 0) {
//   min += 1;
// }
// for (let i = min; i <= max; i += 2) {
//   // total = i % 2 === 0 ? (total += i) : (total += 0);
//   // console.log(total);
// }
// console.log(`Сумма всех четных чисел в диапазоне от ${min - 1} до ${max} будет: ${total}`);
// console.timeEnd('SecondWay');

//! Покупка в магазине

// let balance = 20000;
// const payment = 200000;

// let message = `Общая стоимость заказа ${balance} кредитов. Проверяем количество кредитов на счету...`;
// if (payment <= balance) {
//   balance -= payment;
//   message = `На счету осталось ${balance} кредитов.`;
// } else {
//   message = `На счету нет средств для осуществления операции`;
// }
// console.log(message);
// console.log(`Операция завершина.`);

//! Покупка в магазине 2

// const totalSpent = 50000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 2;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 5;
// } else if (totalSpent >= 5000) {
//   discount = 10;
// } else {
//   console.log('Н партнео. Скидка 0%');
// }
// payment -= (discount / 100) * payment;
// console.log(`Сумма ${payment} кредитов с учетом скидки ${discount}%`);

//------------------------------------------------------------------------------------------
//! Массивы;

// const names = ['Alexey', 'Sergey', 'Artem'];
// const nameToFind = 'Artem';
// const lastIndex = names.length - 1;
// let message = 'Нет такого';

// for (const name of names) {
//   // console.log(name);
//   if (name === nameToFind) {
//     message = 'Есть такой';
//     break;
//   }
// }
// console.log(message);
//--------------------------------

// const numbers = [12, 33, 56, 26, 9, 5, 34, 356, 4, 32, 2, 7, 77, 0, 70];
// const threshold = 107;

// for (const number of numbers) {
//   // console.log(number);
//   if (number < threshold) {
//     continue;
//   }
//   console.log(`номер ${number} большe ${threshold}`);
// }
//--------------------------------
// const phrase = 'London is the cappital of England';
// console.log(phrase.split(' ').includes('the'));

// const numbers = [12, 33, 56, 26, 9, 5, 34, 356, 4, 32, 2, 7, 77, 0, 70];
// const numberForCheck = 356;
// const isInRange = numbers.includes(numberForCheck);

// if (isInRange) {
//   console.log('Входит');
// } else {
//   console.log('Не входит');
// }
//--------------------------------
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]
//--------------------------------
// const nouns = [
//   'хлеб',
//   'яблоко',
//   'сыр',
//   'киви',
//   'Арчика',
//   'борщ',
//   'уроки',
//   'сапоги',
//   'дерево',
//   'сон',
// ];
// const verbs = [
//   'ем',
//   'делаю',
//   'сплю',
//   'бегу',
//   'люблю',
//   'иду',
//   'играю в',
//   'готовлю',
//   'стираю',
//   'жгу',
//   'бросаю',
// ];
// // verbs.push('лечу', 'лечу', 'лечу', 'лечу', 'лечу', 'лечу', 'лечу', 'лечу');

// let selectedNoun, selectedVerb;
// selectedNoun = Math.round(Math.random() * (nouns.length - 1));
// selectedVerb = Math.round(Math.random() * (verbs.length - 1));
// console.log(`Я ${verbs[selectedVerb]} ${nouns[selectedNoun]}`);

// console.log(verbs.slice(2, -2));

//--------------------------------
// const nouns = [
//   'хлеб',
//   'яблоко',
//   'сыр',
//   'киви',
//   'Арчика',
//   'борщ',
//   'уроки',
//   'сапоги',
//   'дерево',
//   'сон',
// ];

// const deletedNouns = nouns.splice(1, 3);
// // console.log(nouns);
// // console.log(deletedNouns);
// nouns.splice(5, 0, deletedNouns);
// // console.log(nouns);
// // console.log(nouns[5][1]);
// nouns.splice(5, 2, 'барабака', 'колбаса', 'шницель');
// const newNouns = nouns.concat(deletedNouns);
// console.log(nouns, newNouns);

//--------------------------------------------------------------

//! ФУНКЦИИ
//! Псевдомассив arguments

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     console.log(argument); //  6

//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

//! Псевдомассив arguments

// function fn() {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
//   return args;
// }

// function fn(...args) {
//   // В переменной args будет полноценный массив
//   return args;
// }

// console.log(fn(1, 'bobby', 3, 4, 5)); //  120

//! Задачки от Репеты по лекции
//! Сумма чисел в массиве

// const numbers = [12, 33, 56, 26, 9, 5, 34, 356, 4, 32, 7, 77, 0, 70];
// let total = 0;

// for (const number of numbers) {
//   total += number;
// }
// console.log(`ИТОГО: ${total}`);

//! Четные чисел в массиве

// const numbers = [12, 33, 56, 26, 9, 5, 34, 356, 4, 32, 7, 77, 0, 70];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2) {
//     continue;
//   }

//   total += number;
// }

// console.log(`Четные: ${total}`);

//--------------------------------------------------------------

//! Вывод массива без первого и оследнего элемента

// console.time('Время выполнения скрипта');
// const string = 'Время выполнения скрипта';
// // const num = '1 2 3 4 5 6 7 8 9 10';
// let arrString = string.split('');
// // let arrNum = num.split(' ').slice(1, -1);

// console.log(arrString.reverse().join(''));
// // console.log(num.split(' ').slice(1, -100));
// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------

//--------------------------------------------------------------

//! Сортировка массива
// console.time('Время выполнения скрипта');

// const arr = ['zik', 'sok', 'nurk', 'dark', 'jirk', 'silk', 'ark', 'feder'];
// for (let i = 1; i < arr.length; i += 1) {
//   for (let j = 0; j < i; j += 1) {
//     if (arr[i][0] < arr[j][0]) {
//       // console.log('arr[i][0] < arr[j][0]', arr[i][0] < arr[j][0]);
//       // console.log(`${arr[i]} = ${arr[j]}`);
//       // console.log('arr[j]', arr[j]);

//       let x = arr[i];
//       // console.log('arr[i] ДО', arr[i]);

//       arr[i] = arr[j];
//       arr[j] = x;
//       // console.log('arr[i] ПОСЛЕ', arr[i]);
//     }
//   }
// }
// console.log(arr);

// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------
//--------------------------------------------------------------

//! Найти минимальное значение в массиве
// console.time('Время выполнения скрипта');

// const numbers = [343, 334, 63, 14, 76, 456];
// let min;
// for (let number of numbers) {
//   if (min === undefined) {
//     // console.log(number);
//     // console.log(min);
//     min = number;
//     continue;
//   }
//   if (min > number) {
//     min = number;
//   }
// }

// console.log(min);

// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------

//--------------------------------------------------------------

//! Увеличит каждый элемент массива на 1
// console.time('Время выполнения скрипта');
// const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i += 1) {
//   numbers[i] += 10;
// }

// console.log(numbers);
// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------

//--------------------------------------------------------------

//! ФУНКЦИИ
// console.time('Время выполнения скрипта');
// const numbers1 = [1, 342, 3, 4, 58, 6];
// const numbers2 = [19, 642, 3, 4, 75, 36];
// const numbers3 = [244442, 42, 38, 4, 534, 6];
// // console.log(numbers1.length);

// const summ = function (items) {
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };
// console.log('numbers1', summ(numbers1));
// console.log('numbers2', summ(numbers2));
// console.log('numbers3', summ(numbers3));

// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------

//--------------------------------------------------------------

//! ФУНКЦИЯ проверки пароля
// console.time('Время выполнения скрипта');
// const logins = ['dfsdfghhh', '435gwfd', 'pklpujo', '72lbkj3i6k', '0k3kjv'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind) ? `true` : `falce`;
// };

// console.log(findLogin(logins, '0k3kjv'));
// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------

//--------------------------------------------------------------

//! Шаблон
// console.time('Время выполнения скрипта');
//код
// console.log();
// console.timeEnd('Время выполнения скрипта');

//--------------------------------------------------------------
