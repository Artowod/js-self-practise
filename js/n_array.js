'use strict';



/* const randomDigit = function (min, max) {
    let result = Math.random() * (max + 1 - min) + min;
    result = Math.floor(result);
    return result;
}

const createOneDimArray = function (arrLength) {
    let result = new Array(arrLength);

    for (let i = 0; i < arrLength; i++) {
        result[i] = randomDigit(1, 10);
    }
    return result;
}

const createTwoDimArray = function (arrLength) {
    let result = new Array(arrLength);

    for (let i = 0; i < arrLength; i++) {
        result[i] = createOneDimArray(arrLength);
    }
    return result;
}

const createThreeDimArray = function (arrLength) {
    let result = new Array(arrLength);

    for (let i = 0; i < arrLength; i++) {
        result[i] = createTwoDimArray(arrLength);
    }
    return result;
}

const createNDimArray = function (dim, arrLength,resultArr=[arrLength]) {
    for (let i = 0; i < arrLength; i++) {
        resultArr[i] = randomDigit(1, 10);
    }
    if (dim !== 0) {
        console.log(dim);
        createNDimArray(--dim, arrLength, resultArr);
    }
    return resultArr;
}
 */
//console.log(createOneDimArray(20));
//console.log(createTwoDimArray(20));
//console.log(createThreeDimArray(20));

/* console.log(createNDimArray(2, 20)); */

//console.log(countSumArray(arr));
//console.log(cloneArray());

const initialArr = [[1,2,3],[3,4,2],[12,[21,11],3],3,4,5];
const initialArr = [['hi','i'],['am','Ukrainian',['programmer','worker','father','teacher']],[12,[21,11],3],3,4,5];

//=============================7 rows===============================
const cloneArray = function (initialArr) {
    let clone = new Array(initialArr.length);
    for (let i = 0; i < initialArr.length; i++) {
        clone[i] = (typeof initialArr[i] === 'object' ? cloneArray(initialArr[i]) : initialArr[i]);
    }
    return clone;
}
//==================================================================

console.log('initialArray:');
console.log(...initialArr);

let modifyArr = cloneArray(initialArr);

console.log('cloneArray:');
console.log(...cloneArray(modifyArr));


modifyArr[0][1] = 100;
console.log('modifyArr[0][1] = 100');
console.log('modifiedArr:');
console.log(...modifyArr);
console.log('initialArr:');
console.log(...initialArr);
