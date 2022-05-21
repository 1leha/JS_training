// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(pizzaName);
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError)
// );
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

//-------------------------------------------------------------------------------

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   numbers.forEach(number =>
//     // console.log(number % 2 === 0?number+value:number)
//     number % 2 === 0 ? newArray.push(number + value) : newArray.push(number),
//   );
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//-------------------------------------------------------------------------------

//  createProduct - принимает объект товара без ID, а так же callback. Функция создает новый объект и передает в него ID
//  и вызывает колбек в который передает объект
//
// const createProduct = (obj, callback) => {
//   const id = '_' + Math.random().toString(36).substring(2, 9);
//   const product = { ...obj, id };
//   callback(product);
//   // console.log(id);
//   // console.log(callback(obj));
//   // callback(obj);
//   // return { id, ...callback(obj) };
//   // console.log({  ...callback(obj) });

//   // console.log(ptoduct);
// };

// const logProduct = product => {
//   console.log(product);
// };

// const logTotalPrice = product => {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: '🍅', price: 20, quantity: 50 }, logProduct);
// createProduct({ name: '🍊', price: 217, quantity: 13 }, logTotalPrice);

//-------------------------------------------------------------------------------

// const TRANSACTION_LIMIT = 1000;

// const accaunt = {
//   userName: 'Oleksii',
//   balance: 300,
//   withdraw(amount, onSuccess, onError) {
//     // console.log(amount <= this.balance);
//     if (amount > this.balance) {
//       onError(`${this.userName}, there are not enough credits on your account`);
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Transaction is more then limit. It must between $1 - $1000. Your transaction is $${TRANSACTION_LIMIT}`,
//       );
//     } else if (amount <= 0) {
//       onError(`Illegal input! Sum must be a positive number`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`accaunt balance now is ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Transaction is more then limit. It must between $1 - $1000. Your transaction is $${TRANSACTION_LIMIT}`,
//       );
//     } else if (amount <= 0) {
//       onError(`Illegal input! Sum must be a positive number`);
//     } else {
//       this.balance += amount;
//       onSuccess(`accaunt balance now is ${this.balance}`);
//     }

//     // return amount <= TRANSACTION_LIMIT && amount > 0 ? onSuccess(amount) : onError(amount);
//   },
// };

// const handleError = message => {
//   console.log(`Error! ${message}`);
// };

// const handleSuccess = message => {
//   console.log(`Success: ${message}`);
// };

// // accaunt.withdraw(2000, handleSuccess, handleError);
// accaunt.withdraw(200, handleSuccess, handleError);
// accaunt.withdraw(0, handleSuccess, handleError);
// accaunt.deposit(500, handleSuccess, handleError);
// // accaunt.deposit(-200, handleSuccess, handleError);
// // accaunt.deposit(3000, handleSuccess, handleError);

//-------------------------------------------------------------------------------

// function each(numbers, callback) {
//   const newArray = [];
//   numbers.forEach(number => {
//     newArray.push(callback(number));
//   });
//   console.log(newArray);
//   return newArray;
// }

// console.log(each([64, 23, 5, 24, 8, 37, 34], value => value / 20));

//-------------------------------------------------------------------------------

// const TRANSACTION_LIMIT = 1000;

// const accaunt = {
//   userName: 'Oleksii',
//   balance: 300,
//   withdraw(amount, onSuccess, onError) {
//     // console.log(amount <= this.balance);
//     if (amount > this.balance) {
//       onError(`${this.userName}, there are not enough credits on your account`);
//     } else if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Transaction is more then limit. It must between $1 - $1000. Your transaction is $${TRANSACTION_LIMIT}`,
//       );
//     } else if (amount <= 0) {
//       onError(`Illegal input! Sum must be a positive number`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`accaunt balance now is ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Transaction is more then limit. It must between $1 - $1000. Your transaction is $${TRANSACTION_LIMIT}`,
//       );
//     } else if (amount <= 0) {
//       onError(`Illegal input! Sum must be a positive number`);
//     } else {
//       this.balance += amount;
//       onSuccess(`accaunt balance now is ${this.balance}`);
//     }

//     // return amount <= TRANSACTION_LIMIT && amount > 0 ? onSuccess(amount) : onError(amount);
//   },
// };

// const handleError = message => console.log(`Error! ${message}`);

// const handleSuccess = message => console.log(`Success: ${message}`);

// accaunt.withdraw(2000, handleSuccess, handleError);
// accaunt.withdraw(200, handleSuccess, handleError);
// accaunt.withdraw(0, handleSuccess, handleError);
// accaunt.deposit(500, handleSuccess, handleError);
// accaunt.deposit(-200, handleSuccess, handleError);
// accaunt.deposit(3000, handleSuccess, handleError);

//-------------------------------------------------------------------------------
// Longest word

// const findLongestWord = text => {
//   // console.log(!text);
//   if (!text) {
//     return 'Error!';
//   }
//   const words = text.split(' ');

//   let longesWord = words[0];
//   // let wordLength = 0;

//   words.forEach((item, index, array) => {
//     if (item.length > longesWord.length) {
//       // wordLength = item.length;

//       // console.log(array[index]);
//       longesWord = item;
//       // console.log(wordLength);
//       // console.log(longesWord);
//       // console.log(item);
//     }
//   });

//   // console.log(longesWord);

//   return longesWord;
// };

// console.log(findLongestWord('sdfds dffsadsadsfds sdhjhhhhhhhfdsf sd '));

//-------------------------------------------------------------------------------
// Longest word 2. Map

// const findLongestWord2 = text => {
//   let words = text.split(' ');
//   let longesWord = words[0];
//   words.map(word => {
//     if (word.length > longesWord.length) {
//       longesWord = word;
//     }
//   });
//   return longesWord;
// };
// console.log(findLongestWord2('sdfds dffsadsadsfds sdhjhhhhhhhfdsf sd '));

//-------------------------------------------------------------------------------

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter((course, index, array) => {
//   return array.indexOf(course) === index
//   // console.log(array.indexOf(course) === index);
// });

// console.log(uniqueCourses);

//-------------------------------------------------------------------------------

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(({ name, score }) => {
//   console.log({ name });
//   return score >= LOW_SCORE && score < HIGH_SCORE;
// });
// console.log(average); // Массив объектов с именами Поли и Хьюстон

//-------------------------------------------------------------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// console.log(colorPickerOptions.find(option => option.color === '#4CAF50'));

//-------------------------------------------------------------------------------

// const array = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// const flatArray = array.flatMap((number, idx, arr) => number)
// const filtredFlatArray = flatArray.filter((number,index) => number >10);
// console.log(filtredFlatArray);

//-------------------------------------------------------------------------------

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   console.log(previousValue+ number);
//   return previousValue + number;
// },0);

// console.log(total); // 32

//-------------------------------------------------------------------------------

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     console.log(allTags);

// console.log(...tweet.tags);
// allTags.push(...tweet.tags);
// console.log(allTags);
//   return allTags;
// }, []);

// const tags = getTags(students1);
// console.log(tags);

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
// console.log(acc);
// console.log(tag);
// console.log(acc.hasOwnProperty(tag));

//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//     // console.log(acc[tag]);
//   }

//   acc[tag] += 1;
//   // console.log(acc['js']);
//   // console.log(acc);

//   // console.log(acc);
//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// // console.log(tagCount);

//-------------------------------------------------------------------------------

// const students = [
//   { name: 'Манго', courses: ['math', 'физика', 'информатика'] },
//   { name: 'Торин', courses: ['math', 'физика'] },
//   { name: 'Кики', courses: ['информатика', 'math'] },
//   { name: 'Поли', courses: ['биология', 'math'] },
//   { name: 'Алекс', courses: ['информатика', 'math'] },
//   { name: 'Галка', courses: ['физика', 'биология', 'информатика'] },
//   { name: 'Киви', courses: ['физика', 'биология', 'информатика', 'история'] },
// ];

// console.log(students1[0].name);
// const getAllCourses = allStudents =>
//   allStudents.reduce((coursesArr, student) => {
//     // console.log(coursesArr);
//     // console.log(...student.tags);
//     coursesArr.push(...student.tags);
//     console.log(coursesArr);
//     return coursesArr;
//   }, []);

// const allCources = getAllCourses(students1);
// console.log(allCources);

// //!----------------------------------------------------------------------------

// const getAllCourses = allStudents =>
//   allStudents.reduce((coursesArr, student) => {
//     console.log(coursesArr);

//     // console.log(...student.tags);
//     coursesArr.push(...student.courses);
//     // console.log(coursesArr);
//     return coursesArr;
//   }, []);

// const allCources = getAllCourses(students);
// console.log(tags);
// console.log(allCources);

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     // console.log(...tweet.tags);
//     allTags.push(...tweet.tags);-
//     // console.log(allTags);
//     return allTags;
//   }, []);

// const tags = getTags(students1);

//!----------------------------------------------------------------------------

// const getCoursesStat = (accumulator, course) => {
//   console.log(accumulator);
//   console.log(course);
//   // console.log(!accumulator.hasOwnProperty(course));
//   if (!accumulator.hasOwnProperty(course)) {
//     accumulator[course] = 0;
//   }
//   accumulator[course] += 1;
//   // console.log(accumulator);
//   return accumulator;
// };

// const countCourses = courses => {
//   // console.log(courses);
//   return courses.reduce(getCoursesStat, {});
// };
// console.log(countCourses(allCources));

//!----------------------------------------------------------------------------

// const students = [
//   { name: 'Юанго', score: 40 },
//   { name: 'Поли', score: 3 },
//   { name: 'Яякс', score: 2 },
//   { name: 'Гиви', score: 10 },
// ];
// const students2 = [
//   { name: 'Юанго', score: 40 },
//   { name: 'Поли', score: 3 },
//   { name: 'Яякс', score: 2 },
//   { name: 'Гиви', score: 10 },
// ];

// const students2 = [
//   { name: 'Юанго', score: 4 },
//   { name: 'Поли', score: 3 },
//   { name: 'Яякс', score: 2 },
//   { name: 'Гиви', score: 10 },
// ];

// const inAscendingScoreOrder = students2.sort((firstStudent, secondStudent) => {
//   console.log(firstStudent.score);
//   console.log(secondStudent.score);
//   console.log(firstStudent.score - secondStudent.score);
//   return firstStudent.score - secondStudent.score;
// });

// const inDescendingScoreOrder = students2.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// );

// const inAlphabeticalOrder = students2.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name),
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);
// console.log(inAlphabeticalOrder);

//!----------------------------------------------------------------------------

// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

//!----------------------------------------------------------------------------

// const players = [
//   { id: 'player-1', score: 200, osOnline: true },
//   { id: 'player-2', score: 142, osOnline: true },
//   { id: 'player-3', score: 163, osOnline: false },
//   { id: 'player-4', score: 854, osOnline: true },
//   { id: 'player-5', score: 342, osOnline: false },
//   { id: 'player-6', score: 149, osOnline: true },
// ];

// const dobledScores = players.map(player => {
//   // Создаем функцию с удвоенными очками (score).
//   //Перебираем объект методом MAP.player - это один объект в массиве
//   return {
//     // возвращанм новый объект
//     ...player, // распыляем текущий объект на данной итерации и получаем его ключи
//     score: player.score * 2, // увеличиваем значения очков в 2 раза
//   };
// });

// // console.log(dobledScores);

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------

// // Поиск  player-4 и замен его статуса osOnline на оффлайн
// const playerToFind = 'player-4';

// const chandeedPlayer = players.map(player =>
//   playerToFind === player.id ? { ...player, osOnline: !player.osOnline } : player,
// );

// console.log(chandeedPlayer);
// // chandeedPlayer;

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------
// // Выборка значений

// const idPlayer = players.map( player => player.id )
// const scorePlayer = players.map(player => player.score);
// const statusPlayer = players.map(player => player.osOnline);

// idPlayer;
// scorePlayer;
// statusPlayer;

//!----------------------------------------------------------------------------
// Фильр
// const players = [
//   { id: 'player-1', score: 200, isOnline: true },
//   { id: 'player-2', score: 142, isOnline: true },
//   { id: 'player-3', score: 163, isOnline: false },
//   { id: 'player-4', score: 854, isOnline: true },
//   { id: 'player-5', score: 342, isOnline: false },
//   { id: 'player-6', score: 149, isOnline: true },
// ];

// // const playersOnline = players.filter(player => player.osOnline)
// const playersOnline = players.filter(({ isOnline }) => isOnline);
// playersOnline;

//!----------------------------------------------------------------------------

// const players = [
//   { id: 'player-1', score: 200, isOnline: true },
//   { id: 'player-2', score: 142, isOnline: true },
//   { id: 'player-3', score: 163, isOnline: false },
//   { id: 'player-4', score: 854, isOnline: true },
//   { id: 'player-5', score: 342, isOnline: false },
//   { id: 'player-6', score: 149, isOnline: true },
// ];

//!----------------------------------------------------------------------------
// Find

// const findScore = players.find(({ score }) => score === 164);
// findScore;

// const findPlayerById = (allPlayers, playerID) => {
//   return allPlayers.find(({ id }) => id === playerID);
// };
// console.log(findPlayerById(players, 'player-6'));
// console.log(findPlayerById(players, 'player-3'));

//!----------------------------------------------------------------------------
// every

// const scoresPositive = players.every(({ score }) => score > 0);
// scoresPositive;

//!----------------------------------------------------------------------------
// some

// const scoresMoreThen300 = players.some(({ score }) => score < 800 && score >100);
// scoresMoreThen300;

//!----------------------------------------------------------------------------
// reduce

// const reduser = players.reduce((totalScores, player) => {
//   if (player.score > 99) {
//     totalScores += player.score;
//   }
//   console.log(totalScores);
//   console.log(player);
//   return totalScores;
// }, 0);
// reduser;

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------

// const reduser = players.reduce((totalScores, player) => {
//   if (player.isOnline) {
//     // console.log(player);
//     // player.isOnline = !player.isOnline;
//     totalScores.push(player);
//   }
//   // console.log(totalScores);
//   return totalScores;
// }, []);
// reduser;

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------

// const reduser1 = players.reduce((totalScores, player, index, array) => {
//   // console.table(totalScores);
//   // console.table(player);
//   // console.table(index);
//   // console.table(array);
//   totalScores.push({
//     id: player.id,
//     score: player.score,
//   });
//   console.log(totalScores);
//   return totalScores;
// }, []);

// console.log(reduser1);
// // console.table(reduser(players));

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------

// const reduser2 = input => {
//   return input.reduce((totalScores, player, index, array) => {
//     // console.table(totalScores);
//     // console.table(player);
//     // console.table(index);
//     // console.table(array);
//     totalScores.push({
//       id: player.id,
//       score: player.score,
//     });
//     // console.log(totalScores);
//     return totalScores;
//   }, []);
// };
// console.log(reduser2(players));
// // console.table(reduser(players));

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------

// const reduser3 = players.reduce((totalScores, player, index, array) => {
//   // console.table(totalScores);
//   // console.table(player);
//   // console.table(index);
//   // console.table(array);
//   totalScores.push({
//     id: player.id,
//     score: player.score,
//   });
//   console.log(totalScores);
//   return totalScores;
// }, []);

// console.log(reduser1);
// // console.table(reduser(players));

// //*----------------------------------------------------------------------------
// //*----------------------------------------------------------------------------

// const players = [
//   { id: 'player-1', score: 50, isOnline: true },
//   { id: 'player-2', score: 50, isOnline: true },
//   { id: 'player-3', score: 50, isOnline: false },
//   { id: 'player-4', score: 50, isOnline: true },
//   { id: 'player-5', score: 99, isOnline: false },
//   { id: 'player-6', score: 100, isOnline: true },
//   { id: 'player-1', score: 50, isOnline: true },
//   { id: 'player-2', score: 50, isOnline: true },
//   { id: 'player-3', score: 50, isOnline: false },
//   { id: 'player-4', score: 50, isOnline: true },
//   { id: 'player-5', score: 99, isOnline: false },
//   { id: 'player-6', score: 100, isOnline: true },
//   { id: 'player-1', score: 50, isOnline: true },
//   { id: 'player-2', score: 50, isOnline: true },
//   { id: 'player-3', score: 50, isOnline: false },
//   { id: 'player-5', score: 99, isOnline: false },
//   { id: 'player-6', score: 100, isOnline: true },
//   { id: 'player-1', score: 50, isOnline: true },
//   { id: 'player-2', score: 50, isOnline: true },
//   { id: 'player-3', score: 50, isOnline: false },
//   { id: 'player-5', score: 99, isOnline: false },
//   { id: 'player-6', score: 100, isOnline: true },
//   { id: 'player-2', score: 50, isOnline: true },
//   { id: 'player-3', score: 50, isOnline: false },
//   { id: 'player-4', score: 50, isOnline: true },
//   { id: 'player-6', score: 100, isOnline: true },
// ];
// players.length;
// const totalScores1 = obj => {
//   return obj.reduce((isOnlineCounter, player, idx, arr) => {
//     // console.log(player.isOnline);
//     if (player.isOnline) {
//       isOnlineCounter += 1;
//     }
//     return isOnlineCounter;
//   }, 0);
// };

// // console.log(totalScores1);

// const isOnlineIsOfline = (fn, obj) => {
//   const isOnline = fn(obj);
//   const isOfline = obj.length - fn(obj);
//   // console.log(fn(obj));
//   // console.log(obj);

//   return {
//     isOnline,
//     isOfline,
//   };
// };
// console.log(isOnlineIsOfline(totalScores1, players));
//!----------------------------------------------------------------------------

// const students = [
//   { name: 'Манго', courses: ['math', 'физика', 'информатика'] },
//   { name: 'Торин', courses: ['math', 'физика'] },
//   { name: 'Кики', courses: ['информатика', 'math'] },
//   { name: 'Поли', courses: ['биология', 'math'] },
//   { name: 'Алекс', courses: ['информатика', 'math'] },
//   { name: 'Галка', courses: ['физика', 'биология', 'информатика'] },
//   { name: 'Киви', courses: ['физика', 'биология', 'информатика', 'история'] },
// ];

// const coursesArray = students.reduce(
//   (allCourses, student) => [...allCourses, ...student.courses],
//   [],
// );

// // coursesArray;

// //*----------------------------------------------------------------------------
// const coursesStat = coursesArray.reduce((acc, course) => {
//   // console.log(acc);
//   // console.log(acc[course]);
//   // console.log(acc.hasOwnProperty(course));
//   // console.log(course);

//   if (!acc.hasOwnProperty(course)) {
//     acc[course] = 0;
//   }
//   // acc[course] += 1;

//   return {
//     ...acc,
//     [course]: acc[course] ? acc[course] + 1 : 1,
//   };
// }, {});
// coursesStat;
//!----------------------------------------------------------------------------
//sort

// const string =
//   'Однако, без специальной обработки, оригинальный объект зачастую теряется. Создание привязанной функции из функции, использующей оригинальный объект, изящно решает эsdasdadsadsadsadsadsadsadsadasdsadsadту проблему:';

// const sortedString = string.split(' ').sort();

// console.log(sortedString);
//!----------------------------------------------------------------------------
// const arr = [1, 6, 3, 8, 3543, 9, 43, 9, 354758, 970, 327];

// // спредаем оригинальный массив в новыйб что бы не изменять оригинальный массив и только тогда сортируем. Иначе Линтеры будут ругаться
// const sortedArr = [...arr].sort((curEl, nextEl) => nextEl - curEl);

// console.log(sortedArr === arr);
// console.log(sortedArr);
//!----------------------------------------------------------------------------
//нам дан одномерный и многомерный массив, нам нужно посчитать сумму элементов массива в таком порядке.элемент массива надо добавить

// var arr1 = [1, 2, 3];

// var arr2 = [
//   [2, 1, 2],
//   [1, 1, 0],
//   [1, 2, 3],
//   [2, 1, 2],
// ];

// const sum = arr1.reduce((accArr1, number, idx) => {
//   // console.log(accArr1);
//   // console.log(number);
//   // console.log(idx);
//   accArr1.push(
//     number *
//       arr2.reduce((accArr2, arrElrm) => {
//         // console.log(accArr2);
//         // console.log(arrElrm[idx]);
//         // console.log(arrElrm[idx] + accArr2);
//         return accArr2 + arrElrm[idx];
//       }, 0),
//   );
//   return accArr1;
// }, []);

// console.log(sum);

//*----------------------------------------------------------------------------
//*----------------------------------------------------------------------------

// console.log(arr1.map((n, i) => n * arr2.reduce((acc, m) => acc + m[i], 0)));

//!----------------------------------------------------------------------------

// const players = [
//   { id: 'player-1', name: 'desik', score: 425, isOnline: true },
//   { id: 'player-2', name: 'kiki', score: 785, isOnline: true },
//   { id: 'player-3', name: 'alex', score: 548, isOnline: false },
//   { id: 'player-4', name: 'bars', score: 154, isOnline: true },
//   { id: 'player-5', name: 'tor', score: 99, isOnline: false },
// ];

// console.log([...players]);
// const byBestPlayer = [...players].sort((a, b) => a.isOnline - b.isOnline);
// console.log(byBestPlayer);

//*----------------------------------------------------------------------------

// const byName = [...players].sort((a, b) => {
//   console.table(a.name[0] > b.name[0]);

//   return a.name[0] > b.name[0];
// });
// console.table(byName);

//!----------------------------------------------------------------------------

// const students = [
//   { name: 'Манго', courses: ['math', 'физика', 'информатика'] },
//   { name: 'Торин', courses: ['math', 'физика'] },
//   { name: 'Кики', courses: ['информатика', 'math'] },
//   { name: 'Поли', courses: ['биология', 'math'] },
//   { name: 'Алекс', courses: ['информатика', 'math'] },
//   { name: 'Галка', courses: ['физика', 'биология', 'информатика'] },
//   { name: 'Киви', courses: ['физика', 'биология', 'информатика', 'история'] },
// ];

// console.time('1');
// const coursesFlat = students.map(student => student.courses).flat();
// // console.log(coursesFlat);
// console.timeEnd('1');

// console.time('2');
// const coursesFlat2 = students.flatMap(student => student.courses);
// // console.log(coursesFlat2);
// console.timeEnd('2');

//!----------------------------------------------------------------------------

// const players = [
//   { id: 'player-1', name: 'desik', score: 425, isOnline: true },
//   { id: 'player-2', name: 'kiki', score: 785, isOnline: true },
//   { id: 'player-3', name: 'alex', score: 548, isOnline: false },
//   { id: 'player-4', name: 'bars', score: 154, isOnline: true },
//   { id: 'player-5', name: 'tor', score: 99, isOnline: false },
// ];

// const filteredPlayers = players
//   .filter(player => !player.isOnline)
//   .sort((playerA, playerB)=>playerA.score-playerB.score);
// console.table(filteredPlayers);
//!----------------------------------------------------------------------------
// console.dir(_.isEmpty({ a: 1 }));
//!----------------------------------------------------------------------------
// const obj = {
//   name: 'alex',
// };

// console.log(obj?.sity);
//!----------------------------------------------------------------------------

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

//!----------------------------------------------------------------------------
// const find_average = array =>
//   array.length ? array.reduce((acc, number) => acc + number, 0) / array.length : 0;

// console.log(find_average([]));

// const a = [];
// console.log(a.length ? 1 : 0);

//!----------------------------------------------------------------------------
// const getUsersWithFriend = (users, friendName) =>
//   users.filter(({ friends }) => friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
//!----------------------------------------------------------------------------
// Change code below this line
// const getFriends = users =>
//   users.flatMap(user => user.friends).filter((user, i, a) => a.indexOf(user) === i);
// console.table(getFriends(users));
// // Change code above this line

//!----------------------------------------------------------------------------
// // Change code below this line
// const isAnyUserActive = users => users.some(({ isActive }) => {
//  console.log(isActive? true : false);
// });
// // Change code above this line
// console.table(isAnyUserActive(users));

//!----------------------------------------------------------------------------

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, { playtime, gamesPlayed }) => {
//   return acc + playtime / gamesPlayed;
// }, 0);

// totalAveragePlaytimePerGame;
//!----------------------------------------------------------------------------
// Change code below this line
// const calculateTotalBalance = users =>
//   users.reduce((totalBalance, { balance }) => totalBalance + balance, 0);
// // Change code above this line

// console.log(calculateTotalBalance(users));
//!----------------------------------------------------------------------------

// const getTotalFriendCount = users => {
//   return users.reduce((acc, { friends }) => {
//     acc.push(...friends.flatMap(friends => friends));
//     return acc;
//   }, []).length;
// };

// console.log(getTotalFriendCount(users));
//!----------------------------------------------------------------------------

// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

// console.log(sortByAscendingBalance(users));
//!----------------------------------------------------------------------------
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((user, i, a) => a.indexOf(user) === i)
//     .sort((a, b) => a.localeCompare(b));
// };

// console.log(getSortedFriends(users));
//!----------------------------------------------------------------------------

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

// console.log(getTotalBalanceByGender(users, 'male'));
//!----------------------------------------------------------------------------

const cars = [
  {
    make: 'Honda',
    model: 'crv',
    type: 'suv',
    amount: 2,
    price: 340000,
    onSale: false,
  },

  {
    make: 'Porshe',
    model: '911',
    type: 'cabriolet',
    amount: 1,
    price: 999000,
    onSale: true,
  },

  {
    make: 'daewoo',
    model: 'Matiz',
    type: 'hatch',
    amount: 24,
    price: 30000,
    onSale: false,
  },

  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 5,
    price: 578000,
    onSale: true,
  },

  {
    make: 'Jeep',
    model: 'Patriot',
    type: 'suv',
    amount: 7,
    price: 250400,
    onSale: true,
  },
];

// const getMade = cars => cars.map(car => car.make);
// const getModels = cars => cars.map(car => car.model);
// const getFullName = cars => cars.map(car => `${car.make} - ${car.model}`);

// console.log(getMade(cars));
// console.log(getModels(cars));
// console.log(getFullName(cars));
//*----------------------------------------------------------------------------
// const makeCarsWithDiskont = (cars, discount) =>
//   cars.map(car => ({
//     ...car,
//     price: car.price * (1 - discount),
//   }));
// console.log(makeCarsWithDiskont(cars, 0.5));
//*----------------------------------------------------------------------------

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

// console.log(filterByPrice(cars, 54688));

// //*----------------------------------------------------------------------------

// const filterBySale = cars => cars.filter(car => car.onSale === true); // предпочтительно прописывать тру и фолс для очевидности

// console.log(filterBySale(cars));

// //*----------------------------------------------------------------------------
// const findCarByModel = (cars, model) =>
//   cars.find(car => car.model.toLowerCase() === model.toLowerCase()); // предпочтительно прописывать тру и фолс для очевидности

// console.log(findCarByModel(cars, ''));

//*----------------------------------------------------------------------------
const sortByModel = (cars, sortType) =>
  [...cars].sort((a, b) =>
    sortType === 'asc' ? a.model.localeCompare(b.model) : b.model.localeCompare(a.model),
  );

console.table(sortByModel(cars, 'asc'));

console.table(sortByModel(cars, 'desc'));

//*----------------------------------------------------------------------------
//*----------------------------------------------------------------------------
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

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------

//!----------------------------------------------------------------------------
