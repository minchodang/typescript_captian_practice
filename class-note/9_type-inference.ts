// 타입 추론 기본 1.
let a = 'abc';

function getB(b = 10){
  var c = 'hi';
  return b + c;
}

10 + '10'// 1010

// 타입 추론 기본 2.
// 기본적인 인터페이스 제네릭의 타입을 정의했을 때, 이 제네릭의 값을 
// 타입스크립트 내부적으로도 추론을 해서 그 변수의 필요한 속성과 타입까지 보장해 준다.

interface Dropdown <T>{
  value: T;
  title: string;
}

let shoppingItem: Dropdown<string>={
  value: 'abc',
  title: 'hello'
}


// 타입 추론 기본 3. 

interface Dropdown2<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown2<K>{
  description: string;
  tag:K;
}

// 디테일 드롭다운 제네릭으로 넘기는 타입에 따라 변동이 생기는 타입은 
// 그에 따라 오류를 발생하게 된다. 이런 식으로 추론 방식이
// 어떤 코드를 작성하고 저장할 때 마다 타입스크립트 랭귀지 서버에 
// 의해서 타입이 추론이 되고 그 값들의 타입이 맞다 그르다를 알려주는 것이 타입 추론이다. 
let detailedItem: DetailedDropdown<number>={
  title:'abc',
  description:'ab',
  value:'aaa',
  tag:'a',
} 

// Best Common Type = 타입의 이름이 아닌, 타입스크립트가 해당 코드를 어떤 타입인지
// 매겨나가는 알고리즘이라고 보면 된다. 어떤 식으로 해석하는 지에 대한 방식.

var arr = [1,2, true, true, 'a'];

