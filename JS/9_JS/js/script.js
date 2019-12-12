let mass = [1,2,3,4,5];
console.log(mass);
MyUtils.remove(mass, 3);
console.log(mass);

let str = 'temp';
let new_str = MyUtils.repeat(str, 3);
console.log(new_str);

let array = [
    {name: 'sasha', age: 18},
    {name: 'evan', age: 25},
    {name: 'kirk', age: 33},
];
console.log(MyUtils.pluck(array, 'name'));

let obj    = [{a:1}, {b:2}];
let undeep = Object.assign(obj);
let deep   = _.cloneDeep(obj);
console.log(obj[0] === deep[0]);
console.log(obj[0] === undeep[0]);

let line1 = {
    x: [],
    y: [],
    type: 'scatter',
};
function calcY(x){
    let y;
    if (x<=2){
        y = 50 * x;
    } else {
        y = 100 * (2 ** (-8 * (x-2)/107) + 2 ** (8 * ((x-2)/107-1)));
    }
    return y;
}

for (let i = 0; i < 100; i++) {
    line1.x.push(i);
    line1.y.push(calcY(i));
}

let layout = {
    title: 'кривая Даннинга-Крюгера',
    xaxis: {
        title: 'мудрость (знание + опыт)',
        showgrid: false,
        showline: false,
    },
    yaxis: {
        title: 'мудрость (знание + опыт)',
        zeroline: false,
    }
}
console.log(line1);
Plotly.newPlot('PlaceHolder', [line1], layout);