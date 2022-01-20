/*Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке.
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number */

function dayOfWeek(a) {
    let result;
    if (typeof a === 'number') {
        switch (a) {
            case 1:
                day = 'Воскресенье';
                break;
            case 2:
                day = 'Понедельник';
                break;
            case 3:
                day = 'Вторник';
                break;
            case 4:
                day = 'Среда';
                break;
            case 5:
                day = 'Четверг';
                break;
            case 6:
                day = 'Пятница';
                break;
            case 7:
                day = 'Суббота';
                break;
            default:
                day = 'Error: parameter should be in the range of 1 to 7';
                }
        } else {
            throw new Error('Error: parameter type is not a Number');
        }             
    return result=day;
}

a=1;

var result = dayOfWeek(a);
console.log(a + '-й день недели - это ' + result);