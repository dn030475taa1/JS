/*Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив
const arr = [3,2,1];
reverse(arr); // [1,2,3]*/

const arr = [3,2,1];
console.log('Массив до применения функции reverse [' + arr + ']');

function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Error: parametr must be an array');
    }    
    for (var i=0; i<arr.length/2;i++) {
        var a=arr[i];
        var b=arr[arr.length-i-1];
        arr[i]=b;
        arr[arr.length-i-1]=a;
    }
    return arr;
}


var result=reverse(arr);
console.log('Массив после применения функции reverse [' + result + ']');
