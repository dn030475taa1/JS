/*Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
*/

function primer(a, b, c) {
    let result;
    let d;
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        d=(a-b)/c;
        } else {
            throw new Error('all parametrs should be a number');
        }             
    return result=d;
}

a=9;
b=3;
c=2;

var result = primer(a, b, c);
console.log('Пример (' + a + ' - ' + b + ")/" + c + ' = ' + result);