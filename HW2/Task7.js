var arr = [1,2,3,4];
a=0; //Сумма значений 1-й пары элементов (1-й и 2-й элементы)
b=0; //Сумма значений 2-й пары элементов (3-й и 4-й элементы)
var i;

for (i of arr) {
    if (i<=2) {
        a=a+i;
    } else {
        b=b+i;
    }
}
console.log ('Сумма значений 1-й пары элементов равна ' + a);
console.log ('Сумма значений 2-й пары элементов равна ' + b);