//создаем конструктор класса - это просто функция, которая в this добавляем свойства и методы объекта.
//this возвращается автоматически. Функции конструкторы нужно писать с заглавной буквы
let domContainer = document.getElementById('slider');
let arr = [
    'img/pic1.jpeg',
    'img/pic2.jpeg',
    'img/pic3.jpeg',
];
let slider = new Slider(domContainer, arr);
slider.run();