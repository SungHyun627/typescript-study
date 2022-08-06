"use strict";
// 타입지정
function add(a, b) {
    return a + b;
}
// const sum: string = add(2, 13) => 타입에로
// 타입 추론
const sum = add(2, 13);
console.log(sum);
// 기본 타입
// 1. 불린(boolean)
// 단순 참 / 거짓
let isBoolean = false;
console.log(isBoolean);
// 2. 숫자(number)
// 모든 부동 소수점 값 사용 가능, ES6에 도입된 2, 8진수 및 리터럴도 지원
let integer = 6;
let float = 3.14;
let hex = 0x00d;
let binary = 0b1010;
let octal = 0o744;
let infinity = Infinity;
let nan = NaN;
console.log(integer, float, hex, binary, octal, infinity, nan);
// 3. 문자열(string)
// 템플릿 문자열도 지원
let blue = 'blue';
let sky = `Sky is ${blue}`;
let sea = 'Sea is also ' + blue;
console.log(blue, sky, sea);
// 4. 배열(Array)
let fruits1 = ['Apple', 'Banana'];
let fruits2 = ['Mango', 'Melon'];
console.log(fruits1, fruits2);
//읽기 전용 배열 생성 가능
let arrA = [1, 2, 3];
let arrB = [1, 2];
console.log(arrA, arrB);
// 5. 튜플(tuple)
// 장해진 타입의 고정된 길이 배열을 표현하지만 이는 할당에 국한.
// push나 splice를 통해 값을 넣을 수 있음.
let tuple = ['a', 1, false];
tuple.push(4);
console.log(tuple);
// 2차원 배열 사용 가능
let users = [
    [100, 'hi', true],
    [200, 'nice', false],
];
console.log(users);
// 6. 열거형(enum)
// 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입. 값의 종류가 일정범위로 정해져 있는 경우 유용
// 기본적 0부터 시작, 1씩 증가, 수동으로 값 변경가능하며 변경한 부분부터 1씩 증가
// 숫자값일 경우 역방향 매핑 가능
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 23] = "Wed";
    Week[Week["Thu"] = 24] = "Thu";
    Week[Week["Fri"] = 25] = "Fri";
    Week[Week["Sat"] = 26] = "Sat";
})(Week || (Week = {}));
console.log(Week);
// 문자열로 초기화할 경우 역방향 매핑 불가
var Subjects;
(function (Subjects) {
    Subjects["Math"] = "math";
    Subjects["History"] = "history";
    Subjects["Korean"] = "korean";
})(Subjects || (Subjects = {}));
console.log(Subjects);
// 7. any
// 타입을 단언할 수 업없는 경우에 사용, 어떤 타입의 값도 할당 가능
let anyvalue = 123;
console.log(anyvalue);
// 8. unknown
// 알 수 없는 타입. Unknow을 다른 타입에 할당할 수 없음.
let UnknownValue = 456;
console.log(UnknownValue);
// 9. null, undefined
// 모든 타입의 하위 타입으로, 각 타입에 할당할 수 있다.
// --strictNullChecks를 사용하면, null/undefined는 any와 자신들 타입에만 할당 가능
let num = undefined;
let str = null;
console.log(num, str);
// 10. void
// 어떤 타입도 존재할 수 없을 나타내는 타입으로써, 함수의 반환값이 없을 때 사용
// 값을 반환하지 않는 함수는 실제로 undefined 반환
function Hi() {
    console.log('hi');
}
console.log(Hi());
// 11. never
// 절대 발생할 수 없는 타입. 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입
function error(mes) {
    throw new Error(mes);
}
// 12. 객체
// 원시 타입이 아닌 타입, typeof 연산자가 object를 반환하는 모든 타입
let obj = { a: 1, b: 2 };
console.log(obj);
