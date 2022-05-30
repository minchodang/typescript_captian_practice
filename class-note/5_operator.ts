var st: string | number | boolean;
function logMessage(value: string | number) {
  //타입 가드
  if (typeof value === 'number') {
    value.toString();
  }
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  // 유니온 타입 설정이라도 공통 속성 제외하고 나머지 속성은 사용 불가. -> 타입 가드 추가 필요.
  someone.name;
  // someone.age;
  // someone.skill;
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });
// 인터섹션: &조건 연산자로 속성 정의하는 것. 따라서 타입이 하나로 합쳐짐. 하나의 타입이 만들어진 것.
function Someone(someone: Developer & Person) {
  // 타입 가드 추가 필요x. 하지만, 실제 실무에서는 유니언 타입이 더 많이 사용.
  someone.name;
  someone.age;
  someone.skill;
}

Someone({ name: '디벨로퍼', skill: '개발', age: 34 });
