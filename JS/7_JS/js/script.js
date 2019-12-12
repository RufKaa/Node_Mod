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


