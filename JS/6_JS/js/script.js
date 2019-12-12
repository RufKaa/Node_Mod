//сложные объекты не копируются, а лишь передаются в качестве ссылок
let user1 = {
    age: 20,
    name: 'Ruf',
}
let user2 = user1;
user2.name = 'Kaa';
console.log(user1);

//Клонирование первого уровня
let user3 = {};
for (let key in user1){
    user3[key] = user1[key];
}
user3.name = 'Ololo';
console.log(user3.name)
console.log(user1.name)

//Alternative
let user4 = {};
Object.assign(user4, user1);
user4.name = 'Altman';
console.log(user1.name)

//Alt 2
let user5 = {...user1}; // оператор распространения объекта {...object}
user5.name = 'Peter';
console.log(user1.name)
console.log(user5.name)

var x = 1;
let y = 2; // x, y - global
function displaySquare(z){ // z - local
    let result = x*y*z;
    console.log(result);
}
displaySquare(3);

console.dir(displaySquare)

function display(){
    zzz = 123; // такое объявление делает её глобальной, после использования функции становится атрибутом window 
    console.log(zzz);
}
display();
console.log(zzz);

let num1 = 3, num2 = 4;
function disp2(){
    console.log(num1); //undefined
    var num1 = 10;
    /*console.log(num2); //error - потому, что переменная объявлена через let, но описана после её использования. Для var таких ограничений нет, поэтому там undefined
    let num2 = 8;*/
}
disp2();

// Замыкание
function outName(name, lastName){
    function getName() {
        return name + ' ' + lastName;
    }
    return getName;
}
let getName = outName('Ruf', 'Kaa');
console.log(getName()); //Из функции getName невозможно добраться до переменных из замкнутой области видимости (name, lastName)

//функция счетчик, которая считает свои вызовы
function createCounter(){
    let i = 0;
    return function(){
        return ++i;
    }
}
let counter = createCounter();
counter()
counter()
console.log(counter())

let counter2 = createCounter();
counter2()
counter2()
counter2()
counter2()
console.log(counter2())

// Шаблон Каррирование
function diff(a) {
    return function(b) {
        return a - b;
    }
}
//console.log(diff(3)(2));
let f = diff(5);
console.log(f(2));

/*
//Отличия var от let - var делает областью видимости i как свойство window, а let создаст i внутри for
let arr = [];
for(let i = 0; i < 5; i++) {
    arr.push(function(){ return i})
}
console.log(arr[0]());
console.dir(arr[0]);
console.log(arr[1]());
console.log(arr[2]());
*/

// This - window. На деле это ссылка на текущий объект, в котором хранится функция
function myFunc(){
    'use strict';
    return this;
}
console.log(myFunc())

//метод объекта - this - ссылка на текущий объект
let obj = {
    propA: 25,
    getA: function() {return this}
}
console.log(obj.getA())

let user = {
    name: 'Ryi',
    name2: 'RyiRRR',
    getUserName() {return this.name;},
}
console.log(user.getUserName())
let func = user.getUserName;
console.log(func());
console.log(func.call(user));
console.log(func.apply({name: 'Looyi'}));

//Отличия call / apply
let arr = [1,3,5,1,2];
console.log(Math.min.call(null, 1,3,5,1,2));
console.log(Math.min.apply(null, arr));

console.log(Math.min(...arr))
let func2 = user.getUserName.bind(user); //привязывает контекст (this) к функции
console.log(func2());

//Bind через замыкание. Запоминаем this в переменную и вытаскиваем из нее свойства
function xa(){
    let that = this;
    return function(){
        return that.name2;
    }
}
//После bind через замыкание уже не передаваемый контекст не важен 
let xxr = xa.call({name2:'rteter'});
console.log(xxr.call({name2:'REWQ'}));

// РЕКУРСИЯ
function writeN(n) {
    if(n >= 0) {
        console.log(n);
        writeN(n-1);
    }
}
writeN(3);

// ручная сортировка массива
let arr3 = [5,1,3,6,24,65];
arr3.sort((n1, n2)=>{ 
    /*if (n1>n2) return 1
    else if (n1<n2) return -1
    else return 0;*/
    return n1 - n2
    //Перемешать массив
    //Math.random()*2 - 1
});
console.log(arr3);