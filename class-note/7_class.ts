class Person {
  // 유효 범위 및 사용 설정 가능.
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

//리액트 예전 문법  - 클래스 기반 코드
// class App extends React.Component {}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
// function App() {
//   return <div>hello world</div>;
// }
