// 함수의 파라미터에 타입을 정의하는 방식.
function sum1(a: number, b: number) {
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식.
function add1(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function define(a: number, b: number): number {
  return a + b;
}

define(10, 20);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}
log('hello world');
log('hello ts', 'abc');
