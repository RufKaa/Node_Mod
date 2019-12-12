let form = document.forms.lesson;
console.log(form);

let login = form.elements.login;
console.log(login.value);
login.value = 'new value';

let colorRadio = form.elements.color;
console.log(colorRadio);

let checkedValue = colorRadio.value;
console.log(checkedValue);

function changeBackground(){
    let dom = form.elements.checkbox_fieldset;
    dom.style.backgroundColor = colorRadio.value;
}

for (let i = 0; i < colorRadio.length; i++) {
    colorRadio[i].addEventListener('click', changeBackground)
}

let checkboxArr = form.elements['lang[]'];
console.log(checkboxArr);

let res = [];
for (let i = 0; i < checkboxArr.length; i++) {
    if(checkboxArr[i].checked) {
        res.push(checkboxArr[i]);
    }
}
console.log(res);

let select = form.elements.countries;
console.dir(select);

let res2 = [];
for (let i = 0; i < select.length; i++) {
    if(select[i].selected) {
        res2.push(select[i]);
    }
}
console.log(res2);

form.addEventListener('submit', myFunc);
function myFunc(e){
    e.preventDefault();
    console.log(this);
    let formData = new FormData(this);
    console.log(formData);
    console.log(formData.get("login"));
    console.log(formData.getAll("lang[]"));
}

login.addEventListener('focus', funcFocus);
function funcFocus(e){
    console.log('элемент получил фокус');
}

login.addEventListener('blur', funcBlur);
function funcBlur(e){
    console.log('элемент потерял фокус');
}