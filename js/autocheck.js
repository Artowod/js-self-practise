"use strict";
window.x = 1;
const obj2 = {
  x: 222,
};
const obj = {
  x: 12,
  fun() {
    alert(this.x);
  },
};
obj.fun.apply(obj2);
//-------------------------------------------------------------

// function showFullName() {
//   alert(this.firstName + " " + this.lastName);
// }

// const user = {
//   firstName: "Василий",
//   lastName: "Петров",
// };

// // функция вызовется с this=user
// showFullName.call(user); // "Василий Петров"
// const x = 10;
// const obj1 = {
//   x: 13,
//   fun() {
//     return this.x;
//   },
// };

// alert(obj1.fun());
// const newObj = obj1.fun.bind(obj1);
// alert(newObj());

//-------------------------------------------------------------

// function makeSizer(size) {
//   console.log(size);
//   return function () {
//     console.log(size);
//     document.body.style.fontSize = size + "px";
//   };
// }

// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);

// // console.log("size12", size12);

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

// class Tank {
//   constructor() {
//     this.isWeapon = true;
//     this.isCannon = false;
//     this.speed = 0;

//     this.decreaseSpeed = function (spd) {
//       this.speed -= spd;
//     };
//   }

//   increaseSpeed(spd) {
//     this.speed += spd;
//   }
// }

// const Abrams = new Tank();
// Object.defineProperty(Abrams, "cannon", { value: "120mm", writable: true, configurable: true });
// Abrams.power = 3000;
// Abrams.cannon = "120mm";
// //delete Abrams.cannon;
// Abrams.weight = "55tonn";
// console.log(Abrams.power);
// // Object.freeze(Abrams);
// console.log(Abrams.isCannon);
// try {
//   Abrams.power = 5000;
//   Abrams.weight = "57tonn";
//   Abrams.speed = "50m/h";
// } catch (err) {
//   console.log("you can`t change it - object is frozen.", err);
// }
// console.log("Abrams", Abrams);

// let Car = {
//   type: "cars",
//   speed: 0,
//   isOpel: true,
//   increaseSpeed(spd) {
//     this.speed += spd;
//   },
// };

// let jeep = Object.create(Car);
// jeep.type = "hummer";

// // jeep = {
// //   type: "humer",
// //     __proto__: Car,
// // };

// console.log("Jeep", jeep.isOpel, jeep.type);
// console.log("Car", Car.isOpel, Car.type);

// console.log("power", Abrams.power);
// console.log("weight", Abrams.weight);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//=======================18 block5 =========================
/*  class User {
 //email;  // ??????????????? - НУЖНА - ИНАЧЕ ОШИБКА

  constructor(email) {
    this.email = email;
  }

  get email1() {
    return this.email;
  }

  set email1(newEmail) {
    this.email = newEmail;
  }
} 


const user1 = new User('jkjkj@jkjkj');
console.log(user1.email1('3333@444'));
console.log(user1.email1()); /* */

/* class Admin extends User {
 static AccessLevel = {
  	BASIC: "basic", 
  	SUPERUSER: "superuser"
	}
}   */
/* const user1 = new User(); */
/*console.log(adm.email);  */
/* console.log(Admin.AccessLevel.BASIC); */
//==========================================================

/* 
class StringBuilder {
  
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.value = str + this.value + str;
  }

}
 */

//======================16 block-5 ===========================
//  class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log("newPrice =  " + newPrice);
//     console.log("MAX_PRICE =  " + Car.MAX_PRICE);
//     if (newPrice <= Car.MAX_PRICE) {
//           console.log('*');
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// console.log('MAX_PRICE = ' + Car.MAX_PRICE);
//===========================================================

/* const numbers = [1, 2, 3, 4];
  
numbers.forEach(function (value, index) {
  if (index < 3) return;
  console.log(`Индекс ${index}, значение ${value}`);

}); */

/*=============================task 45  ==block4 ================*/
//Дополни код так, чтобы в переменной names
//получился массив имён авторов в алфавитном порядке,
//рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

/*  const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8; 

console.log(books.reduce((acc, item) => acc + item.rating,0)); */

// Change code below this line

/* const names = [...books].sort((book1, book2) => book1.author.localeCompare(book2.author))
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author);

console.log(names); */
/*==========================================================*/

/* 
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
 */
/*===========================48  block4==============================*/
//Дополни функцию getTotalBalanceByGender(users, gender) так,
//чтобы она возвращала общий баланс пользователей(свойство balance),
//пол которых(свойство gender) совпадает со значением параметра gender.

/* const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter((user) => { return user.gender === gender; }).
    map(user => user.balance).reduce((previousValue, number) => previousValue + number);
};
const gender = 'female';
console.log("--", getTotalBalanceByGender(users, gender));  */
/*===================================================================*/

/*===========================47  block4==============================*/
//Дополни функцию getSortedFriends(users) так,
//чтобы она возвращала массив уникальных имён друзей(свойство friends)
//отсортированный по алфавиту.

/* const getSortedFriends = users => {
  return [...users].flatMap(user => user.friends).
    filter((friend, index, array) => {
      return array.indexOf(friend) === index;
    }).
    sort((friend1, friend2) => { return friend1.localeCompare(friend2) });
};

console.log("--", getSortedFriends(users)); */
/*===================================================================*/

/*===========================46  block4==============================*/
// Дополни функцию getNamesSortedByFriendCount(users) так,
// чтобы она возвращала массив имён пользователей
// отсортированный по возрастанию количества их друзей(свойство friends).

// Change code below this line
/* const getNamesSortedByFriendCount = users => {
  return [...users].sort((user1, user2) => { return user1.friends.length - user2.friends.length })
    .map(user => user.name);
};

//console.log(users);
console.log(getNamesSortedByFriendCount(users));
 */
// Change code above this line
//======================================================================

/* ------------------------37  -block4---------------
// Change code below this line
const getTotalFriendCount = users => {
  let count = 0;
  return users.reduce((acc, user) => {
    count += user.friends.length;
    return count;
  }, 0);
};
console.log(getTotalFriendCount(users));
// Change code above this line
/* --------------------------------------------------



//------------------25---block4------------------
// Change code below this line
/* const getFriends = (users) => {
  let sumArr = [];
  let result = [];
  
  users.forEach((value, key, array) =>
    { sumArr.push(...value.friends); });
  sumArr.forEach(value =>
    { if (!result.includes(value)) result.push(value); });
  return result;
};
// Change code above this line
console.log(getFriends(users)); */
//------------------------------------------------

//const numbers = [5, 10, 15, 20, 25];

//numbers.forEach(function (value, index) {
//  console.log(`Индекс ${index}, значение ${value}`);
//});

/*==========================задачка================================*/

/* const initialString = "--->--<-><><-><><><><->>>>>><<<<<-<<<-->>>>><>-";
const definedArr = ['->', '<-', '<>', '<<<']; 
let count = 0;

const getSubStrIndex = (subStr, str) => str.indexOf(subStr);
const getMin = (arr) => Math.min(...arr);
const getCutIndex = (arrOfKeys, stringForCheck) => {
  let indexesArr = [];
  for (const subStr of arrOfKeys) {
    let subStrIndex = getSubStrIndex(subStr, stringForCheck);
     if (subStrIndex !== -1)
      indexesArr.push(subStrIndex + subStr.length);
  }
  return indexesArr.length === 0 ? -1 : getMin(indexesArr); 
}

let currString = initialString;
while (getCutIndex(definedArr, currString) !== -1) { 
  count +=1;
  currString = currString.slice(getCutIndex(definedArr, currString));
}
console.log(initialString);
console.log(count);
 */
/*==========================================================*/

/* случ строка из 3 символов */

/* 
const initial = "-><->>>->";
const definedArr = ['->', '<-']; */

/* const arrObj = {
  '->': -1,
  '<-': -1,
}
 */

/* arrCount(definedArr);

const arrCount = function (initialString) {

  initialString.forEach(callback()

}

 */

/* const arrCount = function (initialString) {
  let result=0 ;
  let indexArrOne = 0;
  let indexArrTwo = 0;
  let cutIndex = 0;
  while (initialString.includes(definedArr[0]) || initialString.includes(definedArr[1])) {
    const a = initialString.indexOf(definedArr[0]);
    
    const b = initialString.indexOf(definedArr[1]);
            console.log(a,b);
      
          a !== -1 ? indexArrOne = a : indexArrOne = 1000000;
      b!==-1 ? indexArrTwo = b: indexArrOne = 1000000;
                console.log(indexArrOne,indexArrTwo);  
    indexArrOne < indexArrTwo ? cutIndex = indexArrOne : cutIndex = indexArrTwo;
      initialString = initialString.slice(cutIndex + 2);
    result += 1;
    console.log(initialString);
    console.log('*');
  }
   
  return result;
}
console.log(arrCount(initial));
 */
//======================= ==>  arrow functions=======================
//=   without /function/ expression   =//
//ex1
//const fun = (a, b, c) => {

//  return a + b + c;
//}

//ex2
//const fun1 = c => c * 2;

//ex3
//const fun2 = (a, b, c) => a + b - c * 2;

//ex4
//const fun3 = (c,b) => c>b?'greater': 'lower';

//ex5  - how to return an object

//const fun4 = (key,val) => ({[key]:val})

//console.log(fun4('car','opel'));

//======================= foreach=======================

//const numbers = [5, 10, 15, 20, 25];

//numbers.forEach(function (value, index) {
//  console.log(`Индекс ${index}, значение ${value}`);
//});

//======================= block-4 callback=======================

/* const fun1 = function(x, y, callback) {
  return (callback(x, y));

}


const sum = function (a,b) {
  return a + b;
}
const div = function (a,b) {
  return a / b;
}
const minus = function (a,b) {
  return a-b;
}

const x = fun1(2, 1, function (a,b) {
  return a + b;
});
console.log(x); */

//======================= block-4 =======================

//отложенный вызов callback функции

// console.log("---------1---------")
// setTimeout(function () { console.log("УРААА") }, 5000);
// console.log("---------2---------")

//======================= block-3 objects=======================
//---35--
/* 
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    this.books[this.books.indexOf(oldName)] = newName;


    // Change code above this line
  },
};


bookShelf.updateBook("Haze", "Dungeon chronicles");
console.log(bookShelf.books); 
*/

//----36---

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
//const deletedScores = scores.splice(0, 3);

//-----41----
/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion({name:newPotionName, price:newPotionPrice}) {
    console.log(newPotionName, newPotionPrice);
    for (const potion of this.potions) {
      if (potion.name === newPotionName) {
          return `Error! Potion ${newPotionName} is already in your inventory!`;   
      }

    }
    this.potions.push({name: newPotionName, price: newPotionPrice});
  },

  removePotion(potionName) {
    let count = 0;
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(count, 1);
        console.log('+');
        return;
      }
      count++;
    } 
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i++){
      const { name } = this.potions[i];
      if (oldName === name) {
        this.potions[i].name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`; 
  },



  // Change code above this line
}
*/
/*-1+--*/ //console.log(atTheOldToad.getPotions());
/*-2+--*/ //console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
/*-3+--*/ //console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));
/*-4+--*/ //atTheOldToad.addPotion({ name: "Power potion", price: 270 });
/*-4+--*/ //atTheOldToad.removePotion("Stone skin");
/*-5+--*/ //console.log(atTheOldToad.removePotion("Power potion"));
/*-6+--*/ //console.log(atTheOldToad.updatePotionName("Stone skin", "Dragon power"));
//console.log(atTheOldToad.potions);
