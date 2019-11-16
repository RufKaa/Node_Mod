//'use strick'

console.log("Output msg");

//Variables
var login;
let password;

//constantes
const CONST_VALUE = 10;

//Determination of variables
login = "admin";
password = '123456789';

console.log(login);

login = '123';

//Initialization of variables
//let password = '11111';

alert(3+2+1);

[1, 2].forEach(alert);

//Types

//Numbers
let height = 123;
let width = 123.45;

//Strings
let str = 'Str\\ing1';
let str2 = "Stri\"ng2";

console.log(str);
console.log(str2);

//Boolean
let active = true;
let stopped = false;

let unknowValue = null;
console.log(unknowValue);

//Undefined
let undefinedValue;
console.log(undefined);

console.log(typeof active);

console.log(width);
let q = parseInt('123.45');
console.log(q);

let f = parseFloat('123.45');
console.log(f);

//Операторы

//Арифметические операторы
// + - * / %
// ** (только в новых стандартах - степень)
let num = 365 % 100;
console.log(num);

let num2 = 40;
console.log(num2 * num);

console.log(2 + 5);       // 7
console.log(2 + '5');     // '25' - конкатенация строк - только со сложением (в остальных случаях преобразование в число)
console.log(2 + 2 + '5'); // "45"
console.log(+ '2' + 5);   // 7

console.log(5 / 'd'); //NaN - Not A Number

console.log(isNaN('das'));   // True  - не число
console.log(isNaN('23das')); // True  - не число
console.log(isNaN('45'));    // False - число
console.log(isNaN('11e2'));  // False - число

console.log(5 / 0); // Infinity
console.log(isFinite(5 / 0)); // False

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); // без потери точности (не в мат записи)
console.log(Number.MIN_SAFE_INTEGER);

/* Операторы присваивания
=, +=, -=, *=, /=, %=
*/
let a = 10;
a += 20; //a = a + 20
console.log(a);
/* Операторы сравнениея 
>, <, >=, <=, 
==  - равенство
=== - строгое равенство
!=  - не равенство
!== - строгое неравенство
*/ 

let num3 = 10;
let num4 = 20;
let str1 = '20';
console.log(num3 > num4);   // False
console.log(str1 == num4);  // True
console.log(num3 !== num4); // True

/* 
Операторы инкремента и декремента
*/
num1 = 2;
console.log(++num1); // 3
num2 = 2;
console.log(num2++); // 2

let i = 2;
i = i ++;
console.log(i);

/* Тернарный оператор ?:
(условие) ? выражение_1 : выражение_2
*/
let t = -5;
let res =  (t < 0) ? -t : t;
console.log(res);


let data = prompt("Input data:", 0);
console.log(data);

let answer = confirm('Are you alive?');
console.log(answer);

