//Отсортировать массив по убыванию.
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]

console.log('Массив до сортировки по убыванию [' + arr + ']');

for (var l = 0; l < arr.length-1; l++) {
for (var i = 0; i < arr.length-l-1; i++) {
    let j = arr[i];
    let k = arr[i+1];
    if (j < k) {
        arr[i+1]=j;
        arr[i]=k;
    } 
}
}

console.log('Массив после сортировки по убыванию [' + arr + ']');