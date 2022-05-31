// 타입 단언(type assertion)
// 타입 스크립트보다 개발자가 더 타입을 잘 알고 있다. 따라서 개발자가 타입을 선언한다.

let b;
b = 20;
b = 'a';
let c = b as string;

// DOM API 조작. 
// <div id="app">hi</div>

// 여기까지는 문제가 없지만, 실제 타입 스크립트를 실무에서 활용하게 
// 된다면, 이렇게 이상적으로 펼쳐지지 않음. 무슨 말이냐면, 
// 쿼리 셀렉터가 돌아가는 시점에 그 라인에 div가 있다는 것을 보장해 
// 주지 않기 때문에, div가 있는 지 확인하는 조건문 작성 필요. 
var div = document.querySelector('div');
if(div){
  div.innerText;
}