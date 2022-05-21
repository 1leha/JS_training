// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// // showThis(); // this in showThis: Window

// const user = {
//   username: 'Mango',
// };

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

//*----------------------------------------------------------------------------
//*----------------------------------------------------------------------------
//!----------------------------------------------------------------------------

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.checkPizza('Smoked'));
// console.log(pizzaPalace.order('Smodfked'));

//!----------------------------------------------------------------------------

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     // console.log(emails);

//     const uniqueEmails = new Set(emails);
//     // console.log([...uniqueEmails]);

//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// // console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail('jacob@hotmail.com'));

//!----------------------------------------------------------------------------

// const notebook = {
//   make: 'Dell',
//   model: 'Presiction 7710',
//   buttonsQuantity: 102,
//   color: 'black',
//   material: 'plastik',
// };

// const notebook2 = Object.create(notebook);
// notebook2.model = 'Presiction 4800';

// console.log(notebook2);
// console.log(notebook2.hasOwnProperty("model"));
// console.log(notebook2.hasOwnProperty('color'));
// console.log(notebook);

//!----------------------------------------------------------------------------

// class Notebook {
//   #model;
//   // конструктор класса (свойства)
//   constructor({ vendor, model }) {
//     this.vendor = vendor;
//     this.#model = model;
//   }
//   // метод
//   get model() {
//     return `${this.vendor} ${this.#model}`;
//   }

//   set model(newModel) {
//     if (newModel === '') {
//       console.log(`Пустая строка`);
//       return;
//     }
//     return (this.#model = newModel);
//   }
// }

// const dellPres7100 = new Notebook({
//   vendor: 'DELL',
//   model: 'Presiction 7100',
// });

// // console.log(dellPres7100.getModel());
// console.log(dellPres7100.model);
// // dellPres7100.model = 'Presiction 4800';
// dellPres7100.model = 'pres 4800';
// console.log(dellPres7100.model);

//!----------------------------------------------------------------------------

// class Notebook {
//   static matherial = {
//     METALL: 'metall',
//     PLASTIK: 'plastik',
//   };

//   #model;
//   #matherial;
//   // конструктор класса (свойства)
//   constructor({ vendor, model }) {
//     this.vendor = vendor;
//     this.#model = model;
//   }
//   // метод
//   get model() {
//     return `${this.vendor} ${this.#model}`;
//   }

//   set model(newModel) {
//     if (newModel === '') {
//       console.log(`Пустая строка`);
//       return;
//     }
//     this.#model = newModel;
//   }

//   get matherial() {
//     return this.#matherial;
//   }
//   set matherial(newMat) {
//     this.#matherial = newMat;
//   }
// }

// const dellPres7100 = new Notebook({
//   vendor: 'DELL',
//   model: 'Presiction 7100',
// });

// // console.log(dellPres7100.getModel());
// console.log(dellPres7100.model);
// // dellPres7100.model = 'Presiction 4800';
// dellPres7100.model = 'pres 4800';
// console.log(dellPres7100.model);

// dellPres7100.matherial = Notebook.matherial.METALL;
// dellPres7100.matherial = Notebook.matherial.PLASTIK;
// console.log(dellPres7100.matherial);

//!----------------------------------------------------------------------------

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

//!----------------------------------------------------------------------------

// const objA = {
//   x: 1,
// };

// const objB = Object.create(objA);
// objB.y = 2;

// const objC = Object.create(objB);
// objC.z = 3;

// // console.table(objA);
// // console.table(objB);
// // console.table(objC);
// // console.table(objC.x);
// // console.table(objC.y);
// // console.table(objC.z);

// console.log(objC.hasOwnProperty('y'));

//!----------------------------------------------------------------------------

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;
console.log(ancestor.isPrototypeOf(parent));

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('surname'));

// Change code above this line

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------
