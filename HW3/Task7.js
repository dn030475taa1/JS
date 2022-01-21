/*Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0 */

a = 12;
var arr= [];

function getDivisors () {
    var i;
    var j;
    for (i of arguments) {
        if (typeof i === 'number') {            
            if (i === 0) {
                throw new Error ('Error: parameter can\'t be a 0');
            } else {
                for (j=1; j<=i ;j++) {
                    if (i%j === 0) {
                        for (k of arguments) {
                            arr.push(j)
                        }
                    }
                }
            }
        } else {
            throw new Error ('Error: parameter type is not a Number');
        }
    }

}

getDivisors (a);
console.log('Для числа ' + a + ' массив делителей ниже:');
console.log(arr);
