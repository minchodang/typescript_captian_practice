// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

//
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
// 호출하는 시점에 타입을 넘겨줄 수 있는 게 바로 제네릭임. 타입 지정해줘야 함.
logText<string>('하이');

// 문제점 1. 함수 중복 선언의 단점. -> 타입 하나 추가로 불필요한 중복 코드

function logT(text: string) {
  console.log(text);
  return text;
}

function logN(num: number) {
  console.log(num);
  return num;
}

logT('a');
logT(10);
const num = logN(10);
logT(true);

// 문제점 2. 유니온 타입을 이용한 선언 방식의 문제점.
function logU(num: string | number) {
  console.log(num);
  return num;
}

// 인풋 값은 해결했으나, 반환 값이 문제가 생김. -> 교집합 타입의 메서드만 사용 가능.
const a = logU(10);
logU(10);

// 제네릭을 통한 선언의 장점 1.
function logG<T>(text: T): T {
  console.log(text);
  return text;
}

// 앞서 메서드 유니언 타입 시에는 교집합 메서드만 사용했으나 이제는 사용 가능.
const str = logText<string>('하이');
// 문자열이라는 것을 타입스크립트도 알고 타입을 틀어지지 않게 구성해 나갈 수 있음.
str.split('');
const login = logG<boolean>(true);
// 이렇게 타입 정의에 대한 이점을 가져가는 것이 제네릭.

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: 'abc',
  selected: false,
};

// 제네릭의 타입 제한. - 제네릭에 조금 더 타입 힌트를 줄 수 있다.
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });

  return text;
}

logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLt<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 이렇게 원래 .length 메소드 걸리는 것은 가능.
logTextLt('a');
// 안에 키 값으로 length가 아니면 사용 불가.
logTextLt({ length: 10 });

//제네릭 타입 제한 3 - keyof - 키오브를 활용해서 제네릭의 범위를 줄인다.
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// 따라서 위에서 인터페이스로 선언한 name, price, stock 중에 하나만 인자로 받을 수 있다.
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption('name');
