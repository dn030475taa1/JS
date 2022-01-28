/*Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);*/


const arr = [1,2,3];
const acc = 0;

function reduceRight(arr, callback) {
    if (!Array.isArray(arr)) {
        throw new Error('Error: parametr is not an array');
    }
    if (typeof callback !=='function') {
        throw new Error('Error: parametr is not a function');
    }
    if (typeof acc!=='number') {
        throw new Error('Error: parametr must be a number or a string');
    }
    counter=0;
    for (var i=arr.length-1; i>=0; i--) {
        if(callback(acc, arr[i], i, arr)) {
            counter=counter+arr[i] + acc;
            }
    }
    return counter;
}


var result=reduceRight(arr, function(acc, item, i, arr) {
    return item>0;
}, acc);
console.log(result);