/*Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число
arrayFill('x',5); // [x,x,x,x,x]*/

var param1 = 'x';
var param2 = 5;

function arrayFill(param1, param2) {
    if (typeof param1!=='number' && typeof param1!=='string' && typeof param1!=='object' && !Array.isArray(param1)) {
        throw new Error('Error: parametr must be a number, string, object, array');
    }
    if (typeof param2!=='number') {
        throw new Error('Error: parametr is not a number');
    }
    arr=[];
    arr.length=param2;
    for (var i=0; i<param2;i++) {
        arr[i]=param1;
    }
    return arr;
}


var result=arrayFill(param1, param2);
console.log(result);