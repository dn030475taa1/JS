/*Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
*/
//'use strict'

const arr = [1,2,3];

function filter(arr, callback) {
    var newArray=[];
    if (!Array.isArray(arr)) {
        throw new Error('Error: parametr is not an array');
    }
    if (typeof callback !=='function') {
        throw new Error('Error: parametr is not a function');
    }
    
    for (var i=0; i<arr.length; i++) {
        if(callback(arr[i], i, arr)) {
           newArray.push(arr[i]);                   
        }
    }
    return newArray;   
}


var filtered=filter(arr, function(item, i, arr) {
    return item>1;
});
console.log(filtered);