
let checked = true;

if(checked){
    console.log(checked);
}

console.log("checked: " + checked);

let age = 23;
if (age < 18) {
    console.log('Access denied');
    
} else {
    console.log('Welcome')
}

/*
let season = 'summer';
if (season == 'summer') {
    document.body.style.backgroundColor = 'orange';
} else if (season == 'winter') {
    document.body.style.backgroundColor = 'white';
} else if (season == 'autumn') {
    document.body.style.backgroundColor = 'yellow';
} else if (season == 'spring') {
    document.body.style.backgroundColor = 'green';
} else {
    console.log('Incorrect season')
}
*/


// Логические операторы

//  || - Или
let day = 'sunday';
if (day == 'saturday' || day == 'sunday') {
    console.log('Holiday')
}

//  && - И
let a = 12, b = 56, c = 45;
if (c > a && c < b) {
    console.log('c beetwin a and b')
}

// ! - отрицание
if (!checked) {
    console.log('You are not prepared!');
}

let tmp = null;
console.log(1 || 2 || 3);       // 1
console.log(0 || 2 || 3);       // 0
console.log(0 || '' || 'asf');  // 'asf'
console.log(0 || null || undefined || 4); // 4

console.log(1 && 2 && 3);   // 3
console.log(0 && 2 && 3);   // 0
console.log(!'' && 2 && 3); // 3

let z = (1, 2, 3);
console.log(z);

let j;
let z1 = (2, 3, j = 4);
console.log(j);
console.log(z1);

let case_num = 2;
switch(case_num) {
    case 1: // case_num === 1
        console.log(1);
        break;
    case 2: // case_num === 2
        console.log(2);
        break;
    default:
        console.log('some-thing');
}

//если выражение в case() = значение в switch()
switch(true) {
    case case_num === 1: // case_num === 1
        console.log(1);
        break;
    case case_num === 2: // case_num === 2 || case_num === 3
    case case_num === 3:
        console.log('2 or 3');
        break;
    default:
        console.log('some-thing');
}

//Операторы циклов 
//Цикл с предусловием
/*
let pwd = null;
while (pwd !=='admin') {
    pwd = prompt('Input password');
}
*/

/*
while (true) {
    alert('I know what you done last summer!');
}
*/

// Цикл с постусловием
a = 5;
do {
    console.log(a);
    a --;
} while (a);

// Цикл for
/*
for(let i = 5; i > 0; i--) {
    let data = prompt('input code');
    if (parseInt(data) === 456) {
        alert('Indeed');
        break;
    } else {
        alert('Wrong! Left attemptes: ' + i);
    }
}
*/
for (let i = 0; i < 10; i++) {
    if (i%2)
        continue;
    console.log(i);
}

/*
for (;;) {} //бесконечный цикл
*/

/*
//Рассчет ЗП
let salary = +prompt('Your salary:'),
    work_days = +prompt('Workdays in this mounth:'),
    worked_out_days = +prompt('Worked out days:\n'), // \n - перенос строки
    result;
result = salary / work_days * worked_out_days * 0.87;

alert(`Your FOT is ${result}`);
*/
/*
let language = +prompt('Choose your language: \n 1. Russian \n 2.English');
switch(language) {
    case 1:
        alert("Йоло");
        break;
    case 2:
        alert('Welcome');
        break;
    default:
        alert('^*^&*#@()#!!!');
}
*/

let summ = 0;
for (i = 1; i <= 100; i++) {
    summ = summ + i;
}

alert(summ);



let content = '';
for (let i = 0; i < 20; i++) {
    let color = 'white';
    if (i % 2 === 0) {
        color = 'grey';
    }
    let row_tmp = `<tr><td style='background-color:${color}'>100</td></tr>`;
    content = content + row_tmp;
}
document.write(`<table>${content}</table>`)
