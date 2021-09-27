'use strict';
 
/* console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems); */

/* const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem); */

/* const txt = '3'
let text = '';
for (let i = 1; i <= 4; i++) {
    text = document.querySelector(`.change${i}`);
    //console.log(text.textContent); // text inside p.article-text
    alert();
    text.textContent = 'rome!';
}
 */

//---------------------------------------------
/* const someFunction1 = ((x) => {
    return 5 > x > 1;
});
const someFunction2 = ((x) => {
    return 5 > x && x > 1;
});

console.log('5 > 2 > 1 = ',someFunction1(2));
console.log('5 > 2 > 1 = ',someFunction2(2)); */
//---------------------------------------------


const someFunction = function(ind, marker) {
    console.log(marker,'this: =', this);
    console.log(marker,'index =', ind);

}

console.log(someFunction, someFunction(1,"*"));

const function2 = function(index, callback){
callback(index, "#");
}
 
function2(5,someFunction);

console.log('=====================================');


const hat = {
    color:'red',
    function2,
};

console.log(hat);

//========================================================================
//==================================ТЕМА 13===============================
//========================================================================

//<button data-action='1' ></button>
//<button data-pull = '1' ></button>

addEventListener('click', e => { 
    
    //тогда в js обращаемся так: 
    if (e.target.dataset.action === '1 ')
        if (e.target.dataset.pull === '1 ')
            if (e.target.tagName === 'BUTTON')
                return true;
});