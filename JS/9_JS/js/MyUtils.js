;!function(){
    window.MyUtils = { //добавляем свойство в window и потом обращаемся к нему
        remove: function(arr, index){
            return arr.splice(index, 1);
        },
        repeat: function(str, count){
            return str.repeat(count);
            return Array(count+1).join(str);
        },
        pluck: function(arr, nameProp) {
            let res = [];
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'object' && arr[i][nameProp] !== undefined) {
                    res.push(arr[i[nameProp]]);
                }
            }
        },
    }
}();