/*Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
Если чётное — функция возвращает `true`, если нечётное — `false`.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

*Чётные числа могут делится на 2 без остатка.*

```js
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number */
a=3;
b=4;
c='Content';

function isEven() {
    var i;
    for (i of arguments) {
        if (typeof i === 'number') {
            if ( i % 2 === 0) {
                console.log('true ' + i + ' чётное число');
                } else {
                    console.log ('false ' + i + ' нечётное число');
                }
            } else {
        throw new Error ('Error: parameter type is not a Number');    
        }
    }
}

isEven (a);
isEven (b);
isEven (c);