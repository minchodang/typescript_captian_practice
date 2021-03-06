// 기존에 존재하는 타입을 맵드 타입의 문법을 이용해서,
//  새로운 타입으로 변환해 내는 것.
// 마치 맵 함수를 돌리는 것처럼 변환되는 것이 맵드 타입이다.
type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};

// 맵드타입이 실제로 타입스크립트 관점에서 내부 구현체로 많이
// 활용되고 있고, 실제로 서비스를 구현할 때, 반복되는 코드
// 들을 유틸리티 타입 형식으로 커스텀해서 만들 수 있는 그런 문법으로
// 쓸 수 있다.
