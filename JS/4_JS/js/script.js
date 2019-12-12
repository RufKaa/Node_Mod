/* Строки */

/* Строка - массив символов. Так же является константой (менять строку обращаюясь к элементам массива нельзя)*/ 

/* Сравнение строк происходит по символьно. Сравниваются их коды ("9" > "876")  */

let str4 = 'a';
str4 += 'b';
console.log(str4);
console.log(str4.toUpperCase());
console.log('dfkDKLSAJD23Dsa'.toLowerCase());

console.log(str4.startsWith('a'));
console.log(str4.endsWith('b'));

console.log(str4.repeat(3));

console.log(str4.includes('ab')); /* есть ли такое вхождение */

let str5 = '999'; //Дописываем символы в начало/конец
console.log(str5.padStart(6, '0'));
console.log(str5.padEnd(6, '0'));

let str6 = str5.padEnd(20, 'Hello');
console.log(str6);

console.log(str6.substr(4, 5));
console.log(str6.slice(3, 8));
console.log(str6.charCodeAt(0));
console.log(String.fromCharCode(57, 64));


/* РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ */

let str7 = 'I am love in the java';
let regexp = new RegExp('lo', '');

console.log(str7.search(regexp)); // индекс первого символа найденной позиции

regexp = /OV/i; //флаг i делает выражение не чувствительным к регистру
console.log(str7.search(regexp));

str7 = 'YOLO yolo';
regexp = /yo/ig; // флаг g заставляет искать все вхождения
console.log(str7.match(regexp));

console.log('asdsas'.replace(/a/ig, 'ssu'));

str7 = 'Hello world';
regexp = /world/i;
console.log(regexp.test(str7)); // Проверка валидации рег. выраж.

//Последовательный поэлементный поиск в строке.
regexp = /ой/ig;
str7 = 'Ой-ой-ой';
/*
console.log(regexp.exec(str7));
console.log(regexp.exec(str7));
console.log(regexp.exec(str7));
console.log(regexp.exec(str7));
*/
let r;
while (r = regexp.exec(str7)) {
    console.log(`${r.index} ${r[0]}`);
}

// . - любой символ, кроме \n
regexp = /CS.4/s; // флаг s позволяет искать символ для . даже с прееносом строки \n
console.log('CSS4'.match(regexp));
console.log('CS-4'.match(regexp));
console.log('CS 4'.match(regexp));
console.log('CS\n4'.match(regexp));

//Диапозоны
let str9 = 'Жили были';
regexp = /[жб][иы]ли/ig; // в скобках позиции символов и их возможные варианты для поиска
console.log(str9.match(regexp));

str7 = 'Саша + Маша так же как Даша + Паша';
regexp = /[а-я]аша/ig;
console.log(str7.match(regexp));

str7 = 'Some txt 436 with numb3r5'; //только цифры
regexp = /[^a-z .]/ig;
console.log(str7.match(regexp));

str7 = 'My name is Alex';
regexp = /\w\w\s\w\w\w\w/ig; //ищем первые 2 буквы, потом пробел и 4 буквы
console.log(str7.match(regexp));

regexp = /\b\w\w\b/ig; // \b - граница слова -- ищем слова из двух букв
console.log(str7.match(regexp));
regexp = /\w\w/ig;
console.log(str7.match(regexp));

str7 = 'MEVN stack includes: HTML, CSS, JS';
regexp = /(HTML|CSS|JS)/ig;
console.log(str7.match(regexp));

str7 = 'They eat 150021 banana and meanwhile they eat 432 apples';
regexp = /\d/ig; 
console.log(str7.match(regexp)); 

//Квантификатор
// + = {1,} - символ должен встретиться определенные количество раз (или от и до)
regexp = /\d+/ig; 
console.log(str7.match(regexp)); 

regexp = /\d{1,6}/ig; 
console.log(str7.match(regexp)); 

str7 = 'They eat 150021 banana and meanwhile they eat 432 apples';
regexp = /[a-z]+$/ig; // $ - якорь конца строки. 
console.log(str7.match(regexp)); 

str7 = 'They eat 150021 banana and meanwhile they eat 432 apples.\nMEVN stack includes: HTML, CSS, JS';
regexp = /\w+/igm; //m - многострочный режим
console.log(str7.match(regexp)); 

//Квантификатор * - диапозон от 0 и более раз
str7 = '100 10 1';
regexp = /10*/ig;
console.log(str7.match(regexp)); 

//Квантификатор ? - от 0 до 1
str7 = 'Привет. Приветик.';
regexp = /[а-яё]{6}(ик)?/ig;
console.log(str7.match(regexp)); 

str7 = 'Iam adult (18+)!';
regexp = /\(\d+\+\)/ig;
console.log(str7.match(regexp)); 

// Задача Проверка номера телефона
str7 = '7 (921) 911-51-97';
regexp = /7 \(\d{3}\) \d{3}-\d{2}-\d{2}/ig;
console.log(str7.match(regexp)); 

//Задача Валидация почты
str7 = 'ifmo@foivm.ru';
regexp = /(\w+\.?)+@(\w+\.)+\w+/ig;
console.log(str7.match(regexp)); 

str7 = '"Ведьма" и её "метла" жили рядом у окна';
regexp = /".+?"/ig;
console.log(str7.match(regexp)); 
