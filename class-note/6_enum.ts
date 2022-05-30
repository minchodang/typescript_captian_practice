// 숫자형 = 따로 문자형 지정을 하지 않거나, 초기화 시켜서 새로 숫자를 지정하지
//않으면, 디폴트 값으로 첫 번째 값은 0부터 시작. 뒤에 숫자는 1 씩 증가.
enum Shoes1 {
  Nike,
  Adidas,
}

let myShoes = Shoes1.Nike;
console.log(myShoes); // 0

// 문자형 이넘 = 값을 지정해 주는 것.

enum Shoes2 {
  Nike = '나이키',
  Adidas = '아디다스',
}
let mySho = Shoes2.Nike;
console.log(myShoes); // '나이키

//예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  // 이넘에서 제공하는 데이터만 집어넣을 수 있다.
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }
  if (answer === Answer.No) {
    console.log('오답입니다.');
  }
}

// 이넘에서 제공하는 데이터만 집어넣을 수 있다.
// 드롭 다운 등의 목록이 필요한 형태에서 이넘을 정의해서 쓰는 것이 조금 더
//정확한 코드와 예외 처리 등에 있어서 케이스들이 많이 줄어들 것.
askQuestion(Answer.Yes);
