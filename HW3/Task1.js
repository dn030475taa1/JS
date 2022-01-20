//Напишите функцию `f`, которая возвращает куб числа. Число передается параметром.
//Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//f(2); // 8
//f('Content'); // Error: parameter type is not a Number

function f(a) {
    let result;
    if (typeof a === 'number') {
        result = a*a*a;
    } else {
        throw new Error ('Parametr is not a Number');
    }
    return result;
}

a=2;
var result = f(a);
console.log ('Куб числа ' + a + ' равняется ' + result);