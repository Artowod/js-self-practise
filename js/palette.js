 'use strict'; 


//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
​
/*===========================================*/
// array.method((item, index, arr) => {});
/*===========================================*/
​
/*
​
// arr.forEach((item, index) => {
//     arr[index] = item * 2;
// });
// console.log(arr);
​
*/
​
/*--------------------------------------*/
​
// const newArr = arr.map(item => Math.pow(2, item));
​
​
// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
// ];
​
// const newArr1 = students.map(student => student.courses);
// const newArr2 = students.flatMap(student => student.courses);
​
// console.log(newArr1);
// console.log(newArr2);
​
/*---------------------------------------*/
​
//const newArr = arr.filter(item => !(item % 2));
​
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];
​
// const newArr = students.filter(item => item.score >= 60); 
// const findStudent = students.find(item => item.score === 59);
// const findIndex = students.findIndex(item => item.score === 59);
​
​
// console.log(findStudent, findIndex);
// console.log(newArr);
​
/*------------------------------------*/
​
// const result1 = arr.every(item => !(item % 2));
// const result2 = arr.some(item => !(item % 2));
​
// console.log(result1);
// console.log(result2);
​
/*-----------------------------------*/
​
/*===========================================*/
// array.reduce((acc, item, index, arr) => {}, 0);
/*===========================================*/
​
//const sum = arr.reduce((acc, item) => acc + item);
​
// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
​
// const sum = tweets.reduce((acc, item) => acc + item.likes, 0);
​
// console.log(sum);
/*-------------------------------------------------*/
​
// const newArr = tweets
//     .flatMap(item => item.tags)
//     .filter((item, index, arr) => arr.indexOf(item) === index)
//     .sort()
//     .reverse();
​
//  console.log(newArr);
​
/*-----------------------------------------------*/
​
// const arr = [2, 5, 6, 4];
​
​
/*
    2,5,6,4     5,2,6,4
    2,5,6,4     5,6,2,4
    2,5,6,4     5,6,4,2
    2,5,4,6     5,6,4,2
​
    2,5,4,6     6,5,4,2
    2,4,5,6
​
*/
​
// const tweets = [
//     { id: "101", likes: 2, tags: ["html", "css"] },
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
​
//const t = [...tweets].sort((a,b) => a.likes - b.likes);
​
​
// arr.sort((x, y) => y - x); // -1 0 1
​
// console.log(tweets);
​
/*-----------------------------------*/
​
// console.log('%c1%c2',
//     'padding: 20px; background-color: red; color: green; font-size: 20px;',
//     'padding: 20px; background-color: white; color: blue; font-size: 20px;'
// );
​
// const palette = {
//     baseStyles: 'padding: 12px 20px; font-size: 30px;',
//     colors: [
//         [255, 0, 0],
//         [0, 255, 0],
//         [0, 0, 255],
//         [0, 0, 0],
//         [255, 255, 255]
//     ],
​
//     /**
//      * Распечатать массив цветов в виде кватдратов с индексами
//      * 
//      * @param [] colors 
//      */
//     printAll(colors = this.colors) {
//         //if (!colors) colors = this.colors;
​
//         const pattern = colors.map(item => `%c${this.colors.findIndex(i => i === item)}`).join(''); // %c0%c1%c2%c3%c4
//         const styles = colors.map(item => `${this.baseStyles} color: rgb(${this.invertColorById(this.colors.findIndex(i => i === item))}); background-color: rgb(${item}); `);
​
//         console.log(pattern, ...styles);
//     },
​
//     /**
//      * Распечатать один цвет
//      * @param [] color 
//      */
//     printColor(color) {
//         const index = this.colors.findIndex(item => item === color);
​
//         console.log('%c' + index, `${this.baseStyles} background-color: rgb(${color}); color: rgb(${this.invertColorById(index)});`);
//     },
​
//     /**
//      * получить цвет по id
//      * @param {*} id 
//      * @returns 
//      */
//     getColorById(id) {
//         return this.colors.find((item, index) => index === id);
//     },
​
//     /**
//      * Добавить цвет в палитру
//      * @param {*} color 
//      */
//     addColor(color) {
//         if (this.checkValidColor(color))
//             this.colors.push(color.map(item => parseInt(item)));
//     },
​
//     /**
//      * проверить цвет на валидность
//      * @param {*} color 
//      * @returns 
//      */
//     checkValidColor(color) {
//         if (!(color.length === 3 && color.every(item => item >= 0 && item <= 255)))
//             return false;
​
//         return true;
//     },
​
//     /**
//      * создание цвета
//      * @param  {...any} color 
//      * @returns 
//      */
//     createColor(...color) {
//         if (!this.checkValidColor(color)) return false;
​
//         this.addColor(color);
//     },
​
//     /**
//      * Удалить цвет по id
//      * @param {*} id 
//      */
//     removeColorById(id) {
//         if (id > 4) this.colors.splice(id, 1);
//     },
​
//     /**
//      * Инверсия цвета по id
//      * @param {*} id 
//      * @returns 
//      */
//     invertColorById(id) {
//         return this.getColorById(id).map(item => 255 - item);
//     },
​
//     /**
//      * Объединение цвета по массиву id
//      * @param  {...any} ids 
//      * @returns 
//      */
//     concatColors(...ids) {
//         ids = ids.filter(id => this.getColorById(id));
​
//         return ids
//             .map(id => this.getColorById(id))
//             .reduce((acc, [r, g, b]) => {
//                 acc[0] += r;
//                 acc[1] += g;
//                 acc[2] += b;
//                 return acc;
//             }, [0, 0, 0])
//             .map(item => item / ids.length);
//     },
​
//     /**
//      * фильтрация по оттенку
//      * @param {*} shade 
//      * @returns 
//      */
//     filertByShade(shade) {
//         return this.colors.filter(([red, green, blue]) => (
//             (shade === 'g' && green > red && green > blue) ||
//             (shade === 'r' && red > green && red > blue) ||
//             (shade === 'b' && blue > red && blue > green)
//         ));
//     },
​
//     filterByIndexRange(start, end) {
//         return this.colors.filter((item, index) => index >= start && index <= end);
//     }
// }
​
// palette.createColor(155, 22, 250);
// palette.createColor(112, 22, 20);
​
// palette.addColor(palette.invertColorById(6));
​
// palette.addColor(palette.concatColors(1, 0, 0, 0));
​
// palette.printAll();
// palette.printAll(palette.filertByShade('r'));
// palette.printAll(palette.filterByIndexRange(4, 8));
​
​
//palette.filertByShade('r').forEach(color => palette.printColor(color));
​
/*------------------*/
// const food = [{
//     name: "Паста «Болоньезе»",
//     weight: 350,
//     price: 68,
//     quantity: 6
// }, {
//     name: "Спагетти с овощами",
//     weight: 350,
//     price: 56,
//     quantity: 16
// }, {
//     name: "Пене с куриным филе",
//     weight: 400,
//     price: 68,
//     quantity: 25
// }, {
//     name: "Пицца «Куриная с ананасами»",
//     weight: 675,
//     price: 139,
//     quantity: 4
// }, {
//     name: "Пицца «Четыре сезона метровая»",
//     weight: 1600,
//     price: 339,
//     quantity: 0
// }, {
//     name: "Пицца «Итальяни»",
//     weight: 740,
//     price: 159,
//     quantity: 8
// }, {
//     name: "Салат «Джонатан с семгой»",
//     weight: 230,
//     price: 77,
//     quantity: 10
// }, {
//     name: "Салат «Цезарь с креветкой»",
//     weight: 230,
//     price: 69,
//     quantity: 0
// }];
​
// const arrNames = food.map(item => item.name);
​
// console.log(arrNames);
​
// const arrAvailable = food.filter(item => item.quantity > 0);
​
// console.log(arrAvailable);
​
// const totalCount = food.reduce((acc, item) => item.quantity + acc, 0);
​
// console.log(totalCount);
​
// const totalPrice = food.reduce((acc, item) => (item.price * item.quantity) + acc, 0);
​
// console.log(totalPrice);
​
// const totalWeight = food.reduce((acc,item) => acc + item.weight * item.quantity, 0) / 1000;
​
// console.log(totalWeight);
​
// const groupPrice = food.map(item => ({ name: item.name, totalPrice: item.price * item.quantity }));
​
// console.log(groupPrice);