let example = document.querySelector('.example');
console.log(example.offsetParent); // родитель на основании которого спозиционирован этот элемент (отличный от статического позиционирования)
console.log(example.offsetLeft);   // отступ слева по родителю (суммарно)

console.log(example.offsetWidth);
console.log(example.offsetHeight);

console.log(example.clientLeft); //отступ от внешней части (по сути размер border)
console.log(example.clientTop);
console.log(example.clientWidth); // content + padding (без учета прокручеваемого контента)
console.log(example.clientHeight);

console.log(example.scrollHeight); // вместе с прокричиваемым контентом
console.log(example.scrollWidth);

console.log(example.scrollTop);   //сколько прокручено

console.log(window.innerWidth);   //размер видимой области окна
console.log(window.innerHeight);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

console.log(window.pageXOffset); //то, на сколько прокручена страница
console.log(window.pageYOffset);

//Прокрутки
//Абсолютная
example.scrollTo(0, 75);
//Относительно текущего положения
example.scrollBy(0, 300);
//Прокрутка до видимого элемента
document.querySelector('.lighter').scrollIntoView(true);

//Координаты элемента относительно документа
let rect = example.getBoundingClientRect();
console.log(rect.top)    //Y - верхней границы
console.log(rect.left)   //X - левой границы
console.log(rect.bottom) //Y - нижней границы
console.log(rect.right)  //X - правой границы

let style = window.getComputedStyle(example);
console.log(style.border);


function my_func(event){
    console.log(event.clientX); //координаты относительно курсора по месту клика
    console.log(event.clientY);
    console.log(event.pageX); //координаты относительно документа по месту клика
    console.log(event.pageY);
}

function my_func2(e){
    console.log('click Handler');
}
example.Click = my_func2;
console.log(example)

example.addEventListener('click', my_func2)

function CancelContextMenu(e) {
    e.preventDefault();
    //form.removeEventListener('contextmenu', CancelContextMenu, true);
}
form.addEventListener('contextmenu', CancelContextMenu, true);
console.dir(form)