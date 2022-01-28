/*Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});*/

const arr = [1,2,3];
function forEach(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error ('Error: parametr must be an array!');
    }
    if (typeof callback !== 'function' ) {
        throw new Error ('Error: parametr must be a function!');
    } 
    for (item=0; item<arr.length; item++) {
        i=arr[item];
        callback(item, i, arr);        
    }
}

forEach (arr, function (item, i, arr) {
    console.log('Индекс ' + item + ': Значение ' + i + ' из массива [' + arr + ']');
});