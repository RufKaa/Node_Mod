/* шаблон цепочек - методы объекта возвращают ссылку на этот объект. 
Делает возможность использовать код myObj.meth1().meth2().meth3() */

class Sample {
    constructor(){
        this.value = 0;
    }
    increment(){
        this.value++;
        return this;
    }
    add(num) {
        this.value += num;
        return this;
    }
    outAlert(){
        //alert(this.value);
        return this;
    }
    getValue(){
        return this.value;
    }
}

let obj = new Sample();
let tmp = obj.increment()
    .add(10)
    .outAlert()
    .getValue();
console.log(tmp);

$(document).on('contextmenu', function(e){
    e.preventDefault();
    return false;
});
$('tr').filter(':odd')
    .find('td')
    .filter(':even')
    .css({ //сюда передаем объект со свойствами css 
        'background': 'grey',
        'border': '1px solid black',
        'height': '20px',
        'width': '20px',
         })
    .end().end().end()
    .filter(':even')
    .find('td')
    .filter(':odd')
    .css({ //сюда передаем объект со свойствами css 
        'background': 'grey',
        'border': '1px solid black',
        'height': '20px',
        'width': '20px',
         });

$('#ahref').click(function(){
    window.print();
    return false;
});

//одиночное срабатывание события. Обработчик на одно нажатие
$('.btn').one('click', function(){
    $(this).text('Already pushed');
});
//при каждом вводе символа
$('#inputText').on('input', function(e){
    let len = $(this).val().length;
    $('#label').text(`${15 - len} symbols left`);
});
//Все первые слова <p> жирным
$('p').each(function(){
    let arr = $(this).html().split(' ');
    arr[0] = '<strong>' + arr[0] + '</strong>';
    $(this).html(arr.join(' '))
});

//Добавление нового элемента и вставка его в документ
let $divElem = $('<div>', {
    id:'test',
    css:{
        'background-color': '#eee',
    }
}).text('some kinda text');
$('body').append($divElem);


$('#1').click(function(){
    $('html').scrollTop(20);
    //$('body').scrollTop(120);
    return false;
})

$('#2').click(function(){
    $("html").animate({"scrollTop": 0}, 5000);  
    return false;
});

function blink(){
    $('.blink').fadeOut(500)
        .fadeIn(500);
}
setInterval(blink, 1000);

function showHide(){
    $('.ShowHide').hide(500)
        .show(500);
}
setInterval(showHide, 1000);

$('.box').on('click', function(){
    if($(this).parent().attr('id')==='box1'){
        $(this).detach().appendTo('#box2');
    } else {
        $(this).detach().appendTo('#box1');
    }
})