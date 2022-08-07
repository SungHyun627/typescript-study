"use strict";
const add1 = (a, b) => a + b;
function hello(a, b) {
    return a + b;
}
console.log(hello('nice', 'weather'));
console.log(hello(1, 2));
// 옵셔널 체이닝, 나머지 매개변수(Rest Parameters)
function buildName(firstName, lastName, ...restOfName) {
    return firstName + ' ' + lastName + ' ' + restOfName.join(' ');
}
console.log(buildName('hi', 'hello', 'nice', 'to'));
//제너릭 사용
function superPrint(a) {
    return a[0];
}
console.log(superPrint([1, 2, 3, 4]));
