let str = 'мир пир',
    query = 'дир';

let templateAll = '';

for (let i = 0; i < query.length; i++) {
    let template = '';
    for (let j = 0; j < query.length; j++) {
        if (i == j) template += '.'
        else template += query[j];
    }
    templateAll += '(' + template + ')';
    if (i !== query.length - 1) templateAll += '|'
}
console.log(templateAll);

let regExp = new RegExp(templateAll, 'ig');
console.log(str.match(regExp));

//console.log(document)
//console.dir(document.body);

let elem = document.getElementById('list');
//console.dir(elem);

console.log(elem.childNodes);            //все узлы
console.log(elem.children);              //только теги

console.log(elem.firstChild)             //первый узел
console.log(elem.lastChild)              //последний узел

console.log(elem.firstElementChild)      //последний тег
console.log(elem.lastElementChild)       //последний тег

console.log(elem.previousSibling)        //предыдущий узел
console.log(elem.nextSibling)            //следующий узел

console.log(elem.previousElementSibling) //предыдущий соседний тег
console.log(elem.nextElementSibling)     //следующий соседний тег

console.log(elem.parentNode)             //узел родителя
console.log(elem.parentElement)          //тег родителя

// Search by ID
let list = document.getElementById('list');
list.style.backgroundColor = 'white';

//Search by tag
let liArr = list.getElementsByTagName('li');
console.log(liArr)

for (let i = 0; i < liArr.length; i ++) {
    liArr[i].style.color = 'rgb(' + rnd() + ',' + rnd() + ',' + rnd() + ')';
    console.log(liArr[i])
}

function rnd(){
    return Math.floor(Math.random()*255)
}

//Search by Name
let inputs = document.getElementsByName('inp');
console.log(inputs)
let elemSomeClass = list.getElementsByClassName('some_class')
console.log(elemSomeClass)

//Поиск по селектору (вернет только первый)
let q1 = list.querySelector('ul > li');
console.log(q1)
//Поиск по селектору всех элементов
let q2 = list.querySelectorAll('ul > li');
console.log(q2)

let q3 = list.querySelectorAll('.some_class')
console.log(q3)
let q4 = document.querySelectorAll('input[type=text]')
console.log(q4)

//Проверка существования атрибута
console.log(list.hasAttribute('id'));
//получение атрибута
console.log(list.getAttribute('id'));
console.log(list.children[0].getAttribute('class'))
//Задать атрибут
list.setAttribute('data-id', '1'); //при добавление своего атрибута стоит добавлять префикс data-
list.setAttribute('style', 'border: 1px solid black;');
console.log(list)

console.log(list.id)
console.log(list.tagName)

//style
console.log(list.style);
console.log(list.style.border);

//class
list.classList.add('green')
list.classList.add('big')
console.log(list.classList)
list.classList.remove('green')
console.log(list.classList)
console.log(list.classList.contains('green')) // проверка существования класса
list.classList.toggle('small') //если нет такого класса, то добавляет, иначе убирает
console.log(list.classList) 
list.classList.toggle('small') // удобно при повторяющейся обработке событий
console.log(list.classList)


//Создание элемента
let newElem = document.createElement('li');
console.log(newElem)
//создание текстового узла
let text = document.createTextNode('ElText')
newElem.appendChild(text);
//Добавление нового элемента
list.children[0].appendChild(newElem);

//let nav = document.getElementById('nav');
console.log(nav);

//Создаем навигационное меню
let ul = document.createElement('ul');
nav.appendChild(ul);
let li = document.createElement('li');
li.innerHTML = '<a href="#">About</a>'; //интерпретирует как текст верстки
ul.appendChild(li);

let li2 = document.createElement('li');
li2.innerHTML = '<a href="#">Products</a>';
ul.prepend(li2); // Перемещает в начало списка детей
ul.prepend(li);

ul.removeChild(li); //удаляет только непосредственного ребенка. Вложенные дети не ищутся

console.log(list.textContent) // выводит текст верстки без тегов
console.log(list.innerText)   // выводит внутренний текст элементов

//если у элемента есть валидный ID, то к этому элементу можно обращаться по id 
console.log(table);
console.log(table.rows);
console.log(table.rows[0].cells);

//показывает бесконечно алерт с интервалов не меньше 2-ух секунд
function showAlert() {
    alert('Hi everyone');
    setTimeout(showAlert, 2000);
}
//showAlert()

let i1 = 0;
var idTimer = 0;
function showAlert2(){
    alert('Hi everyOne, 2');
    idTimer = setInterval(showAlert2, 2000);
    if (i1++ >= 3) clearInterval(idTimer);
}
//showAlert2()

//Даты
let myDate = new Date(0);
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
let myDate2 = new Date();
console.log(myDate2 - myDate)