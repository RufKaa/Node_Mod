document.addEventListener("DOMContentLoaded", 
function (){
    let presentContainer = document.getElementById('present_container');
    presentContainer.addEventListener('click', showPresent);

    let tds = document.getElementsByTagName('td');

    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', calcAction);
    }

    let shape = document.getElementById('box');
    document.addEventListener('keydown', function(e){
        if (e.keyCode == 37){
            //Left
            shape.style.left = (parseInt(shape.style.left) - 5) + 'px';}
        else if (e.keyCode == 39){
            //right
            shape.style.left = (parseInt(shape.style.left) + 5) + 'px';}
        else if (e.keyCode == 40){
            //top
            shape.style.top = (parseInt(shape.style.top) + 5) + 'px';}
        else if (e.keyCode == 38){
            //bottom
            shape.style.top = (parseInt(shape.style.top) - 5) + 'px';
        }
        console.log(e.keyCode);})


}, false); //третий параметр говорит о bubbling - вспылатии/погружении

function showPresent(e){
    let clickElem = e.target;
    let present = clickElem.dataset.present; //dataset - набор пар ключ/значение для атрибутов начинающихся с data-
    
    if (present){
        clickElem.textcontent = libs()[present];
        clickElem.classList.add('present');
        this.removeEventListener('click', showPresent);
    }
}

function libs(){
    return {
        'car': 'машина',
        'dog': 'собака',
        'cat': 'кошка',
        'book': 'книга',
        'candy': 'конфета',
    }
}

function calcAction(e) {
    let type = this.innerText;
    let display = document.getElementById('display');

    switch(type){
        case 'c': { display.value = ''; break; }
        case '=': { display.value = eval(display.value); break; }
        default: display.value += type;

    }
}