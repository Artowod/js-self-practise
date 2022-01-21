"use strict";
// Замена подряд идущих букв на их количество.
// assdssddffffrrreeeweggggg // => 'as2ds2d2f4r3e3weg5

const changeString = (initialString) => {
  let changedString = [];
  let isEqualNextLetter = false;
  let currentMarker = 0;
  let resultedArrIndex = 0;
  do {
    let currentLetter = initialString[currentMarker];
    let itterator = 0;
    do {
      itterator += 1;
      let nextLetter = initialString[currentMarker + itterator];
      isEqualNextLetter = currentLetter === nextLetter;
    } while (isEqualNextLetter);
    changedString[resultedArrIndex++] = itterator > 1 ? currentLetter + itterator : currentLetter;
    currentMarker += itterator;
  } while (currentMarker !== initialString.length);

  return changedString.join("");
};

console.log(changeString("assdssddffffrrreeeweggggg"));

const string = "assdssddffffrrreeeweggggg";
const letters = string.split("");
let num = 1;
let array = [];
let currentLetter = "";

/* console.log(letters) */
for (const letter of letters) {
  /* console.log(currentletter) */
  if (currentLetter === letter) {
    num++;
  } else {
    if (num !== 1) {
      array.push(num);
    }
    array.push(letter);
    num = 1;
    currentLetter = letter;
  }
}
const result = array.join("");
console.log(result);
