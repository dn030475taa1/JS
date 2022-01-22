//Отсортировать массив по возрастанию.
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]

console.log('Массив до сортировки по возрастанию [' + arr + ']');

for (var l = 0; l < arr.length-1; l++) {
for (var i = 0; i < arr.length-l-1; i++) {
    let j = arr[i];
    let k = arr[i+1];
    if (j > k) {
        arr[i+1]=j;
        arr[i]=k;
    } 
}
}

console.log('Массив после сортировки по возрастанию [' + arr + ']');