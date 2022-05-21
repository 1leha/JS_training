// const volume = 200;

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// book.name = book.author + ' - ' + book.title;
// book.pages = { volume };
// console.log(book);
// console.log(book['author']);
// const clotheTypes = 'T-shorts';
// const clothesColor = ['red', 'red', 'red', 'red', 'red'];

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
//   [clotheTypes]: clothesColor,
// };

// const newBook = Object.create(book);
// newBook.subtitle = 'gowest';

// console.log('subtitle' in newBook);
// console.log(newBook.hasOwnProperty('subtitle'));
// console.log(book.hasOwnProperty('subtitle'));
// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
//
// console.log(book);

// const fn = function () {
//   console.log('hellow');
// };
// fn();

// fn.hello = 'hellow2';
// console.dir(fn);
// console.dir(fn.hello);

//! Методы
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   tracks: ['track1', 'track2', 'track3', 'track4'],

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },

//   getTreckCount() {
//     return this.tracks.length;
//   },

// getBookName() {
//   return `${this.title} -  ${this.author}`;
// },
// };

// console.log(book.getTreckCount());
// book.addTrack('gittt');
// book.addTrack('gittt');
// book.addTrack('gittt');
// book.addTrack('gittt');
// book.addTrack('gittt');
// book.addTrack('gittt');
// book.addTrack('gittt');
// book.addTrack('gittt');
// console.log(book.addTrack('sdsads'));
// console.log(book.addTrack('sdsads'));
// console.log(book.getTreckCount());

// console.log(book);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   tracks: ['track1', 'track2', 'track3', 'track4'],

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },

//   getTreckCount() {
//     return this.tracks.length;
//   },

//   getBookName() {
//     return `${this.title} -  ${this.author}`;
//   },
// };

// const keys = Object.keys(book);
// const values = Object.values(book);
// const entries = Object.entries(book);

// for (const key of keys) {
//   console.log(key, book[key]);
// }

// // console.log(keys);
// // console.log(values);
// // console.log(entries);

// const x = {
//   a: 3,
//   b: 34,
//   c: 8,
//   d: 11,
// };
// console.log(Object.keys(x).length);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const prod of products) {
//     if (prod.name === productName) {
//       return prod.price * prod.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('D1roid'));

// const str1 = 'dfsdf';
// const str2 = 'sadsadsadsad';
// const str3 = [...str1, ...str2, ...'sdfdsfsdgf3232r4'];
// function multiply(otherArgs) {
//   console.log(...otherArgs); // Массив остальных аргументов
// }

// // multiply(str3);
// console.log(str3); // Массив остальных аргументов
// console.log([...str3]); // Массив остальных аргументов

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
//   fg: 10,
// };

// const accessType = book.isPublic ? 'публичном' : 'закрытом';
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;

// const { title: ft, author, fg: a = 5 } = book;

// console.log(ft, author, a);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);

//   // console.log(book.title);
//   // console.log(book.author);
//   // console.log(book.rating);
// }

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   cars: { car1: 'porcshe', car2: 'Mers' },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
//   cars: { car1: favoritCar, car2: workCar },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// console.log(workCar); // 1308
// console.log(favoritCar); // 1308

// const data = {
//   text: 'Alex learn JS',
//   category: 'adult',
//   priority: 'high',
// };

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const defoultCard = {
//     category,
//     priority,
//     completed,
//   };
//   // const { text, category, priority } = data;

//   console.log({...defoultCard, ...data});
//   // console.log( ...{{category, priority, completed }, {...data}});
//   // Change code above this line
// }
// makeTask({ category: "Finance", text: "Take interest" });

// Change code below this line
// function add(...args) {
//   // Change code above this line
//   const total = 0;
//   for (const arg of args) {
//     total *= arg;
//   }
//   return total;
// }

// Change code below this line
// function addOverNum(max, ...args) {
//   let total = 0;
//   console.log('max, ...args :>> ', max, args);

//   for (const arg of args) {
//     total += max < arg ? arg : 0;
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(500, 425, 122, 324));

// // Change code below this line
// function findMatches(array, ...argToFind) {
//   const matches = []; // Don't change this line
//   console.log('array, to find :>> ', array, argToFind);
//   for (arrItem of array) {
//     console.log('arrItem :>> ', argToFind.includes(arrItem));
//     if (argToFind.includes(arrItem)) {
//       matches.push(arrItem);
//     }
//   }
//   // Change code above this line
//   console.log(matches);
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
// };

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     console.log(this.books);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     // console.log('newPotion :>> ', newPotion.name);
//     // console.log('newPotion :>> ', newPotion);

//     for (const potion of this.potions) {
//       // console.log(potion);
//       // console.log(newPotion.name === potion.name);

//       if (newPotion.name === potion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       return [...this.potions, newPotion];

//   },

//   removePotion(potionName) {
//     // console.log(potionName);

//     for (const potion of this.potions) {
//       // console.log(potion);
//       // console.log(name === potionName);
//       if (potionName === potion.name) {
//         console.log(this.potions.indexOf(potion));
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//       }
//       return;
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       // console.log(oldName);
//       // console.log(newName);
//       // console.log(potion.name);

//       if (oldName === potion.name) {

//         potion.name = newName
//       }
//     }

//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));
// console.log(atTheOldToad.getPotions());

//TODO Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

//TODO getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
//TODO addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
//TODO removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//TODO updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

//* Объявлена переменная atTheOldToad
//* Значение переменной atTheOldToad это объект
//* Значение свойства atTheOldToad.getPotions это метод объекта
//* Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
//* Значение свойства atTheOldToad.addPotion это метод объекта.
//* Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
//* Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
//* Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
//* Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
//* Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив potions не изменяется
//* Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
//* Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку "Error! Potion Dragon breath is already in your inventory!"
//* Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку "Error! Potion Stone skin is already in your inventory!"
//* Значение свойства atTheOldToad.removePotion это метод объекта
//* Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
//* Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//* Значение свойства atTheOldToad.updatePotionName это метод объекта
//* Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
//* Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// function calcBMI({ weight, height }) {
//   console.log(weight, height);
//   return weight / height ** 2;
// }

// const me = {
//   weight: 85.4,
//   height: 1.764,
// };

// console.log(calcBMI(me));

// function arrDestr([litera, numb]) {
//   console.log(litera, ': ', numb);
//   const l = litera.split(',');
//   const n = numb.split(',');
//   console.log(l, ': ', n);
//   for (const i of l) {
//     console.log('l[l.indexOf(i)] :>> ', l[l.indexOf(i)]);
//   }
// }

// const me = ['asdf, zxcv, qqwwee', '123, 456, 789'];

// console.log(arrDestr(me));

// function getBoots({ ownerName, boots: { num1: n1, num2: n2 } }) {
//   return `Владелец ${ownerName}. Размер: ${n1 + n2}`;
// }

// console.log(
//   'getBoots() :>> ',
//   getBoots({
//     ownerName: 'Will',
//     boots: {
//       num1: 111,
//       num2: 43,
//     },
//   }),
// );

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const company = {
//   companyName: 'Grundic',
//   stock: {
//     radio: 123,
//     toster: 1,
//   },
// };

// function getStockValue({ companyName, stock }) {
//   let sum = 0;
//   console.log(Object.values(stock));

//   for (const item of Object.values(stock)) {
//     sum += item;
//   }
//   return `${companyName} have ${sum} items in stock`;
// }
// console.log('getStockValue :>> ', getStockValue(company));

// function generateId() {
//   return Math.random().toString(36).substr(2, 9);
// }

// function createContact(contactPartition) {
//   const { firstName, secondName, ...otherKeys } = contactPartition;
//   return {
//     id: generateId(),
//     fullName: `${firstName} ${secondName}`,
//     ...otherKeys,
//   };
// }
// function getNormalizeDate() {
//   let today = new Date();
//   console.log(`${today.getFullYear()}.${today.getMonth()}.${today.getDate()} - ${today.getTime()}`);
//   return {
//     year: today.getFullYear(),
//     month: today.getMonth(),
//     day: today.getDate(),
//     time: today.getTime(),
//   };
// }

// console.log(
//   createContact({
//     firstName: 'Alex',
//     secondName: 'Fox',
//     email: 'af@gmail.com',
//     list: 'friends',
//   }),
// );

// const stonesObject = {
//   emerald: { price: 3200, quantity: 10 },
//   diamond: { price: 5200, quantity: 2 },
//   sapphire: { price: 3700, quantity: 7 },
// };

// function getTotalPrice(stonesObject, stoneName) {
//   // console.log(stonesObject);
//   // console.log(Object.keys(stonesObject));
//   // for (const key of Object.keys(stonesObject)) {
//   //   if (key === stoneName) {
//   //     // console.log(stonesObject[key]);
//   //     const { price, quantity } = stonesObject[key];
//   //     // console.log(key);
//   //     // console.log(price);
//   //     // console.log(quantity);
//   //     return price*quantity;
//   //   }
//   // }

//   //*2 vatiant prepod supper
//   if (stoneName in stonesObject) {
//     console.log(stoneName);
//         return stonesObject[stoneName].price*stonesObject[stoneName].quantity;
//   }
// }

// getTotalPrice(stonesObject, 'emerald');
// console.log(getTotalPrice(stonesObject, 'emerald'));

// const stone = {
//   name: 'emerald',
//   price: 3200,
//   quantity: 10,
// };
// delete stone.name;
// console.log('name' in stone);
// stone.name = 'brulik';
// console.log('name' in stone);

// console.log(stone);
// console.log('price' in stone);
// console.log('name' in stone);

// const salary = [1000, 3222, 2, 46, -4542, 34345]
// console.log(Math.min(...salary));

// const someObj = {
//   a: 1,
//   b: 2,
//   func11() {},
//   getSomthing() {},
// };

// function findMethod(...obj) {
//   // if (') {' in obj) {
//   //   console.log(') {' in obj);
//   //   return true;
//   // }
//   // console.log(...obj);
//   // console.log(Object.values(...obj));
//   // console.log(typeof Object.values(...obj));
//   // console.log(typeof obj);
//   let methodsArray = [];
//   for (const value of Object.values(...obj)) {
//     // console.log(!(value.name === undefined));
//     if (!(value.name === undefined)) {
//       methodsArray.push(value.name);
//       console.log(methodsArray);
//     }

//     // console.log(someObj.indexOf(value));
//   }
//   // return `No methods in this object`;
//   return methodsArray;
// }

// console.log(findMethod(someObj));

// function findMethod2(obj) {
//   // if (') {' in obj) {
//   //   console.log(') {' in obj);
//   //   return true;
//   // }
//   // console.log(...obj);
//   // console.log(Object.values(...obj));
//   // console.log(typeof Object.values(...obj));
//   // console.log(typeof obj);
//   let methodsArray2 = [];
//   for (const key of Object.keys(obj)) {
//     console.log(typeof obj[key]);
//     if (typeof obj[key] === 'function') {
//       methodsArray2.push(key);
//       // console.log(methodsArray);
//     }

//     // console.log(someObj.indexOf(value));
//   }
//   // return `No methods in this object`;
//   return methodsArray2;
// }

// console.log(findMethod2(someObj));

// let a = { b: 2 }
// let a1 = a
// a1 = null
// console.log(a.b);
// console.log(a1.b);

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// function dinner(person, wantToEat, dontWantToEat) {
//   let a = Math.random();
//   let meWantToEat = a > 0.5;
//   console.log(a);
//   console.log(meWantToEat);
//   if (!meWantToEat) {
//     dontWantToEat(person);
//     return;
//   }
//   wantToEat(person);
// }

// function imHungry(name) {
//   console.log(`${name} want to eat`);
// }
// function imNotHungry(name) {
//   console.log(`${name} dont want to eat`);
// }

// dinner('Alexey', imHungry, imNotHungry);

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// numbers.forEach(function (number, index, numbers) {
//   console.log(`Индекс ${index}, значение ${number} in ${numbers}`);
// });
// numbers.forEach(function (numb, idx) {
//   console.log(numb);
//   console.log(idx);
//   console.log(idx*numb);
// });

// const add = a => {
//   return a + 5;
// };

// console.log(add(2));

function doMath(arg1, arg2, operation) {
  console.log(operation(arg1, arg2));
}

const plus = (a, b) => a + b;

const minus = (a, b) => a - b;

// doMath(10, 20, plus);
// doMath(10, 20, minus);

doMath(10, 20, (a, b) => a - b);

doMath(10, 20, function (a, b) {
  return a * b;
});
