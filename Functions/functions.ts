// 호출 시그니처
type Add = (a: number, b: number) => number;
const add1: Add = (a, b) => a + b;

// 이름은 같지만 매개변수 타입과 변환 타입이 다른 여러 함수를 가질 수 있는 것
// 서로 다른 여러개의 Call signature를 가졌을 때 오버로딩 발생
function hello(a: string, b: string): string;
function hello(a: number, b: number): number;
function hello(a: any, b: any): any {
  return a + b;
}
console.log(hello('nice', 'weather'));
console.log(hello(1, 2));

// 옵셔널 체이닝, 나머지 매개변수(Rest Parameters)
function buildName(
  firstName: string,
  lastName?: string,
  ...restOfName: string[]
) {
  return firstName + ' ' + lastName + ' ' + restOfName.join(' ');
}
console.log(buildName('hi', 'hello', 'nice', 'to'));

//제너릭 사용
function superPrint<T>(a: T[]) {
  return a[0];
}
console.log(superPrint([1, 2, 3, 4]));
