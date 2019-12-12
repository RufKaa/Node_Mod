let arr = [1,4,2,7];
console.log(Math.max(...arr)); // ... - оператор деструктор (деструкция). Разлагает структуры до единиц (массив на элементы)

// ФУНКЦИИ
// функциональное объявление
let res = sum(15,55);
function sum(a, b) {
    return a + b;
}

function greeting(userName = 'ink') {
    console.log('Hello, mr. F!');
    return;
    console.log('add ad')
}
greeting();
greeting('Ink');

function greeting2(userName) {
    if (!userName) { // ! - инверсия
        console.log('Не задано имя пользователя')
    }
    console.log(greeting2('Alex'));
    return;
}

function getMin(num1, num2) {
    if (!num1 || !num2) {
        console.log('Not givin a number')
        return;
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('give me numbers');
        return;
    }
    return (num1 < num2) ? num1: num2;
}

console.log(getMin(2,5));


arr = [1,2];
function arrSum(someaArr) {
    if (!Array.isArray(someaArr)){
        console.log('gimme an array');
        return;
    }
    let sum = 0;
    for (let i = 0; i < someaArr.length; i++){
        sum += someaArr[i];
    }
    return sum;
}
console.log(arrSum(arr));

//необязательно явно объявлять все аргументы функции
function printUserInfo(){
    console.log(arguments); //arguments - переменная, в которой хранятся все переданные аргументы функции
}

printUserInfo('Sahsa', '19213', '897412452');

function min(){
    let min = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min)
            min = arguments[i];
    }
    return min;
}

arr = [1,4,-5,3,4,54];
console.log(min(...arr));

function printUserInfo2(name, age, ...arrOther){
    console.log(name);
    console.log(age);
    console.log(arrOther);
}
printUserInfo2('gg', 'kk', '3231', 12, 4, 5);

//Анонимные функции - функциональные выражения
let subNums = function(a, b) {
    return a - b;
}

console.log(subNums(24, 10));

+function(a, b) {
    console.log(a - b);
}(4, 5);

//Стрелочные функции =>
subNums = (a,b) => a - b;

function delay(cb){
    setTimeout(() => {
        cb();
    }, 2000);
}

/*
delay(()=>{
    console.log('Delay 2 secons')
});
*/

////////////////////////// PART 2. Objects
//спсобы объявления объектов
let obj  = new Object();
let obj2 = {};

let num = 123;
//пример
let article = {
    id: 1,
    title: 'Photo',
    author: 'Petya',
    description: 'Desc art',
    ' ': 'asd',
    null: null,
    'null': 1, //все ключи сохраняются в строки
    [1+2]: 6,  // и вычисляются, если это возможно (но в конце сохранится как строка, тут "3")
    num,        //создастся ключ с именем переменной, а в значение попадет значение переменной
};

console.log(article);
console.log(article.id);
console.log(article.title);
console.log(article.author);
console.log(article[' ']); //переход по [] и имени ключа
console.log(article.null);
console.log(article[3]);

//добавление свойств
article.img = '#';
console.log(article.img);

delete article.img;
console.log(article);

console.log('id' in article);   // проверка наличия свойства 'name' in object
console.log('null' in article);
console.log('img' in article);

//так же можно проверять наличия индекса у массива in

console.log(article.hasOwnProperty('title'));

for (let key in article) {
    console.log(key + ' ' + article[key]);
}

let arr4 = [3,5,2,4];
for (let key in arr4) {
    console.log(key + ' ' + arr4[key]);
}

console.log(Object.keys(article));    //ключи
console.log(Object.entries(article)); // пары ключ - значение
console.log(Object.values(article));  // значения

let articles = [{
    id: 1,
    title: 'JS',
    Author: 'JFR',
}, {
    id: 2,
    title: 'HTML',
    Author: 'KOT',
}, {
    id: 3,
    title: 'CSS',
    Author: 'DOG',
}]

//получение элементов массива объектов с нужным значением свойства
function getData(arr, propName, propValue) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][propName] === propValue) {
            arrRes.push[arr[i]];
        }
    }
    return arrRes;
}
console.log(getData(articles, 'Author', 'KOT'));
console.log(getData(articles, 'id', 1));

//Деструктуризация массива в переменные
let userData = ['root', '123', 56, 'Peter'];
let [login, pass, age, name] = userData;
console.log(login, name);

//деструктуризация объекта в переменные
let {id, title, Author} = articles[0];
console.log(id, title, Author);

//let {id, title:xxx, Author} = articles[1]; // title:xxx - передача значенияя ключа title в переменную xxx
//console.log(id, xxx, Author);

//использование деструктуризации при передачи переменных в функции
function sf({id, title:xxx, Author}) {
    console.log(id, xxx, Author);    
}
sf(articles[2]);

let menu = {
    items: [{
        label: 'About',
        href: '/about.html',
        items: [{
            label:'contacts',
            href: '/contacts.html',
        },{
            label:'Products',
            href: '/products.html',
        }]
    }, {
        label: 'About you!',
        href: '/about_you.html',
    }]
};

let obj4 = {
    a1: 1,
    b1: 3,
    c: {
        d: 2,
        e: 5, 
    },
}
let {a1, b1, c:{d, e}} = obj4; // вложенная деструктуризация
console.log(a1, b1, d, e);

//поменять местами
let x1 = 23, x2 = 32;
[x2, x1] = [x1, x2];
console.log(x1, x2);