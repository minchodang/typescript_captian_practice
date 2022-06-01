// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}
let developer: Developer;
let person: Person;
// 결국 이는 타입 호환이 되지 않는 것이다.
// 왜냐하면, 디벨로퍼의 속성과 펄슨의 속성을 비교해보면,
// 서로 일치하는 속성이 하나 뿐이기 때문이다.
// 기본적으로 타입 호환 = 구조적으로 오른쪽의 타입이 왼쪽의 타입에 비해
// 더 많은 속성을 가지고 있으며 더 컸을 때 왼쪽과 호환이 된다.
// developer = person;

// 가능한 예시.
person = developer;

// class
interface Developer2 {
  name: string;
  skill: string;
}
class Person2 {
  name: string;
}

let developer2: Developer2;
let person2: Person2;
// 이렇게 타입 별칭이나 클래스와 인터페이스 등의 명칭으로 타입 호환성을 확인하지는
// 않는다. 즉, 어떤 것이든 간에 내부적인 속성과 타입 정의들에 대해서 비교.
// developer2 = new Person2();

// 함수 상에서의 타입 호환성.
// 현재 예시에서 sum이라는 함수가 add라는 함수보다 구조적으로 더 크다.

let add = function (a: number) {
  //...
};
let sum = function (a: number, b: number) {
  //...
};

// 위처럼 당연히 안 됨. 구조적으로 반대는 역시나 가능.
// add = sum;
sum = add;

// 제네릭.

interface Empty<T> {
  //...
}

var empty1: Empty<string>;
var empty2: Empty<number>;
// 사실 인터페이스 같은 경우, 저 안의 구조는 비워져 있기에, 어떤 값을 넣어도
// 동일하다고 판단할 것.
empty1 === empty2;
empty2 === empty1;

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// 이렇게 되면, 사실상 구조적인 차이를 만들게 된다.
// 그래서 타입 호환 불가함.

// notempty1 = notempty2;
// notempty2 = notempty1;
