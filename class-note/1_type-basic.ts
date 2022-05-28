//js 문자열 선언.
// var str = 'hello'

//ts 문자열 선언
let str: string = 'hello';
//ts 숫자.
let num: number = 20;
//ts 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

//ts 튜플- 배열의 특정 인덱스의 타입 지정.
let adress: [string, number] = ['gangbuk', 23];

// ts 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: 'thor',
  age: 1000,
};

//ts 진위값
let show: boolean = true;
