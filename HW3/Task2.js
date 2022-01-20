/* Напишите функцию `f` которая возвращает сумму всех параметров.
Количество параметров может быть любым.
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
*/

function sum() {
    let result;
    a=0;
    var args = [].slice.call(arguments);
    console.log(args);
    var i;
    for (i of args) {
        if (typeof i === 'number') {
            a=a+i;
        } else {
            throw new Error('all parametrs should be a number');
        }        
    }    
    return result=a;
}

a=1;
b=2;
c=3;
d=4;

var result = sum(a, b, c, d);
console.log('Сумма всех параметров ' + result);