// 타입 단언(type assertion)
// 타입 스크립트보다 개발자가 더 타입을 잘 알고 있다. 따라서 개발자가 타입을 선언한다.

let b;
b = 20;
b = 'a';
let c = b as string;

// DOM API 조작. 
// <div id="app">hi</div>

var div = document.querySelector('div');
div.innerText;