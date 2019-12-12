let arr = new Array();
let arr1 = [];

console.log(arr);
console.log(arr1);

let lessons = ['history', 'chemistry', 'math'];
console.log(lessons);
console.log(lessons[0]);
console.log(lessons[99]); // undefined

lessons[2] = 'russian language';
console.log(lessons);

lessons[90] = 'physics';
console.log(lessons[90]);
console.log(lessons);

let lessonsLength = lessons.length;
console.log(lessonsLength);

lessons = ['history', 'chemistry', 'math'];
for (let i = 0; i < lessons.length; i++) {
    console.log('Lesson: ' + lessons[i]);
}

//массив как стек
let temp_l = lessons.pop(); // забирает и возвращает последнее значение
console.log('tmp l ' + temp_l + ' lessons left ' + lessons);

lessons.push('new lesson'); // кладет элемент в конец массива
console.log('lessons left ' + lessons);

//массив как очередь
let tmp_s = lessons.shift(); // забирает элемент из начала массива
console.log(tmp_s);
console.log(lessons);
lessons.unshift('finanse'); // вставляет элемент в конец массива
console.log(lessons);
/*
console.time('100000 push/pop');
let test = [];
for (let i = 0; i < 100000; i++) {
    test.push(1);
}
for (let i = 0; i < 100000; i++) {
    test.pop(1);
}
console.timeEnd('100000 push/pop');

console.time('100000 shift/unshift');
test = [];
for (let i = 0; i < 100000; i++) {
    test.unshift(1);
}
for (let i = 0; i < 100000; i++) {
    test.shift();
}
console.timeEnd('100000 shift/unshift');
*/

// Со свойством длины массива можно работать на запись
lessons = ['history', 'chemistry', 'math'];
lessons.length = 10;
console.log(lessons);
lessons.length = 2;
console.log(lessons);

let str = '+7-921-654-34-12';
let arr_str = str.split('-');
console.log(arr_str);
let str2 = arr_str.join('-');
console.log(str2);

// Splice вырезает элементы из исходного массива в результат
lessons = ['history', 'chemistry', 'math'];
let lss_splice = lessons.splice(1, 2);
console.log('Splice ' + lessons);
console.log('Splice ' + lss_splice);

// Slice копирует элементы в новый массив
lessons = ['history', 'chemistry', 'math'];
let lss_slice = lessons.slice(1, 2);
console.log('Slice ' + lessons);
console.log('Slice ' + lss_slice);

//Конкатенация массивов
let arrA = [1,2,3];
let arrB = [4,5,6];
let arrC = arrA.concat(arrB);
console.log(arrC);

//Многомерные массивы (матрицы)
let matrix = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
];
console.log('mtx ' + matrix[1][2]);

let wtfArr = [1, true, 'asf', [2,5]];
console.log(wtfArr);

for (let i = 0; i < wtfArr.length; i++) {
    console.log(typeof wtfArr[i]);
    if (Array.isArray(wtfArr[i])) {
        console.log(wtfArr[i] + ' is msv');
    }
}

arrA = [1,2,3];
arrB = [4,5,6];
arrC = [];
arrC.push(arrB);

let a = arrA.concat(arrC);
console.log(a);

console.log(arrA.indexOf(2)); // поиск значения в массиве и возврат индекса
arrA = [1,2];
arrB = [1,2];
console.log(arrA === arrB); // эти массивы не равны

arrC = [arrA, arrB];
console.log('Search in massives ' + arrC.indexOf(2));

lessons = ['history', 'chemistry', 'math'];
console.log(lessons.includes('chemistry'));

let pics = ['1.jpeg','2.jpg'];
for (let i = 0; i < pics.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', 'img/' + pics[i]);
    document.getElementById('slider').appendChild(img);
}

//Задан числовой массив. Найти мин и макс
let arrNum = [2,3,7,13,5,0,20];
let min = arrNum[0], max = arrNum[0], sum = arrNum[0], len = arrNum.length;
for (let i = 1; i < len; i ++) {
    if (arrNum[i] < min)
        min = arrNum[i];
    else if (arrNum[i] > max)
        max = arrNum[i];
    sum += arrNum[i];
}
console.log(min, max, sum/len);
arrNum.pop();  //удаляем последний элемент
arrNum.shift() //удаляем первый элемент
console.log(arrNum);

//Сортировка
arrNum = [2,3,7,13,5,0,20];
console.log(arrNum);
for (let i = 0, len = arrNum.length; i < len; i ++) { //для каждого прохода
    for (let j = 0; j < len - 1 - i; j++) {
        if (arrNum[j] > arrNum[j+1]) {
            let tmp     = arrNum[j];
            arrNum[j]   = arrNum[j+1];
            arrNum[j+1] = tmp;
        }
    }
}
console.log(arrNum);

/* 
Электронные часы работают в формате 00:00 - 23:59. Сколько раз в сутки случаются комбинации
Например 02:20, 11:11, 15:51.
*/
let count = 0
for (let i = 0; i <= 23; i++) {
    let t, t_reverse, val_reverse;

    if (i < 10)
        t = '0' + i;
    else 
        t = '' + i;

    t_reverse = t.split('').reverse().join('');
    val_reverse = parseInt(t_reverse);
    if (val_reverse <= 59) {
        count++;
        console.log(`${t}:${t_reverse}`);
    }
}
console.log(count);