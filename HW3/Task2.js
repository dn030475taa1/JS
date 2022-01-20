/* Напишите функцию `f` которая возвращает сумму всех параметров.
Количество параметров может быть любым.
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
*/

function sum(a, b, c, d) {
    let result;
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number') {
        result = a + b + c + d;
    } else {
        throw new Error('all parametrs should be a number');
    }
    return result;
}

a=2;
b=2;
c=2;
d=2;

var result = sum(a, b, c, d);
console.log(result);