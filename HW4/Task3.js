/*Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
const arr = [1,2,3];
every(arr, function(item, i, arr) {});*/

const arr = [1,2,3];

function every(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error('Error: parametr is not an array');
    }
    if (typeof callback !=='function') {
        throw new Error('Error: parametr is not a function');
    }
    var counter=0;
    for (var i=0; i<arr.length; i++) {
        if(callback(arr[i], i, arr)) {
           counter=counter + 1;                   
        }
    }
    return (counter===arr.length);   
}


var everyOne=every(arr, function(item, i, arr) {
    return item>1;
});
console.log(everyOne);