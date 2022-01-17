console.log('while');
var i=1;
while (i<3) {
    console.log (i);
    i++;
}

console.log('do...while');
var i=1;
do {
    console.log(i);
    i++;
} while (i<3);

console.log('for');
var i;
for (i=1; i<3; i++) {
    console.log(i);
}

console.log('for in');
var arr=[1, 2, 3];
var i;
for (i in arr) {
    console.log(i);
}

console.log('for of');
var arr=[1, 2, 3];
var i;
for (i of arr) {
    console.log(i);
}
