'use strict';

/*
/*=========================деструктуризация=1====================*/
// Change code below this line   -  использовать деструкторизацию вместо обьявления переменных.
function calculateMeanTemperature(forecast) {
/*
  const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high; 
*/

/* решение */
const {today: {low:todayLow, high:todayHigh}, tomorrow:{low:tomorrowLow, high:tomorrowHigh},} = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

const result = calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });

console.log(result);
/*=========================деструктуризация=1====================*/




console.log("===================================================");

/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys){
	if(apartment.hasOwnProperty(key)) {
  		values.push(apartment[key]);
   	}
}


console.log(keys);
console.log(values);
 */

//------------================------------------=============


//функция
const fn = function (...result) {
  console.log(result[3]);
}
fn(1, 2, 3,+"4");

console.log(typeof ['khjk3']);



//----------- Объекты ----------
const obj1 = {
  city: 'Kyiv',
  street: 'Boychenka',
  building: 8,
  appartment: 320,
}

const obj2 = {
  city: 'Lviv',
  street: 'L.Ukrainki',
  building: 23,
  appartment: 13,
}

const obj3 = {
  city: 'Lugansk',
  street: 'Bandery',
  building: 1,
  appartment: 100,
}


const objArr = [obj1, obj2, obj3];

let cityList = [];
let streetList = [];
let buildingList = [];
let appartmentList = [];
for (const element of objArr) {
  cityList.push(element.city);
  streetList.push(element.street);
  buildingList.push(element.building);
  appartmentList.push(element.appartment);
}

console.log(cityList);
console.log(streetList);
console.log(buildingList);
console.log(appartmentList);

/* obj1["5"] = 'GRATS!';
const addVal = 'BEEE';

obj1["6"] = addVal;

const addKey = '3';

obj1[addKey] = addVal;
  */

//===========================
let str = '';
const objSum = {};

// function fun (obj) {   <---такой подход не рекомендуют.
const fun = function (obj) { 
  const keysArr = Object.keys(obj);
  const valArr = Object.values(obj);

  for (let i = 0; i < keysArr.length; i++) {
    objSum[keysArr[i]] = valArr[i];
  }

}
fun(obj1);
fun(obj2);
console.log(objSum);

const key = 'city';
console.log(objArr[1][key]);

//===========================

/* 
const values = Object.values(obj1);
for (const val of values) {
  str += val + ' ';
}


console.log(str); */

//==============================================
//===================массивы====================



//обьявление пустого массива
/* let result = [];

function getCommonElements(array1, array2) {
  // Change code below this line
let result = [];
  for(let i=0; i<array1.length;i+=1){
 if(array2.contains(array1[i])) {
  result.push(array1[i]);  
 }
}

return result;
 // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
 */

//return [array[0], array[array.length - 1]];



/*
function formatMessage(message, maxLength) { 
let result; // Change code below this line 
result = message.length<=maxLength ? message : message.slice(0, maxLength) + "..."; 
 // Change code above this line 
 return result; 
}

console.log(formatMessage("Curabitur ligula sapien", 16));


/*
let tankPower;
tankPower = 100;
const FIRST_WORD = "Hello";

console.log("----------", tankPower);
console.log("Tank Power: " + tankPower);
console.log(typeof tankPower);
console.log("Type of power: " + typeof tankPower);

let isPowered = confirm("Is your tank Heavy?");
console.log(isPowered);
tankPower = prompt("Please put the Tank Power:");
console.log("Tank power is: " + tankPower);

Number("23"); // преобразование в число 23
console.log(Number("23"));
//или короче - ставим плюс перед переменной
const variab = "23";
console.log(+variab); //23

//если переменная не будет как число - например k2 тогда
const variab = "k2";
console.log(+variab);  //NAN


//преобразует строку в число по -символьно До первого фейла.
Number.parseInt("12px5"); //будет 12
Number.parseFloat("12.3fdsfsd12.4"); //будет 12.3

Number.isNaN("someString"); // это Не Число ? - будет true  - 

console.log((0.112 + 0.454).toFixed(2));  // отсекает дробную часть до 2х знаков

Math.floor(1.7); // 1
Math.ceil(1.2); // 2
Math.round(1.2); // 1
Math.round(1.5); // 2
Math.max(20, 10, 50, 40); // 50
Math.min(20, 10, 50, 40); // 10
Math.pow(2, 4); // 16   (возведение в степень)
Math.random(); // случайное число между 0 и 1
Math.random() * (10 - 1) + 1; // псевдослучайное число от 1 до 10
Math.random() * (100 - 10) + 10; // псевдослучайное число от 10 до 100
Math.random() * (80 - 30) + 30; // псевдослучайное число от 30 до 80

//----------строки-------------------
let message = "HellO";
message.toLowerCase();
message.toUpperCase(); 

console.log("1" == 1);
console.log("Hello".indexOf("l")); //2

"some Message".includes("messa"); //false
"some Message".includes("Messa"); //true

console.log("some Message".endsWith("ge")); //true

"some message".replace("me", "1"); //so1 message
"some message".replaceAll("me", "1"); //so1 1ssage

//------Шаблонные строки---------------- 
const guestName = "Манго";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;

*/

/*******************************************************/
/********************** ОБЬЕКТЫ ************************/
/*******************************************************/

//--------- вызов значения по ключу
/*
apartment.key;        //если ключ известен
apartment[keyValue];  //если ключ - в переменной
*/

//--------- добавление элементов в обьект -  обычные параметры и обьект в обьект  -----
/* 
apartment.area = 60;
apartment.location = {country :"Jamaica", city : "Kingston"}; 
*/

//--------- ключ берем из переменных ----------------
/*
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
[emailInputName] : "henry.carter@aptmail.com",
[passwordInputName] : "jqueryismyjam",
};
*/


