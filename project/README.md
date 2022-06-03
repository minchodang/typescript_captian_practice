## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기.

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기.

- 물론, 기존의 js 파일 자체의 코드량이 적다면, 바로 타입스크립트로
- 바꿔서 할 수 도 있지만,코드 량이 많아지거나 혹은 기존 레거시 코드를
- 남기고 싶을 수 있다.
- 사용하는 것이 jsdoc. 그래서 먼저 적용 후에, 바꿔보면 좋다.

1. 타입스크립트의 기본 환경 구성.

- [x] NPM 초기화
- [x] 타입스크립트 라이브러리 설치
- [x] 타입스크립트 설정 파일 생성 및 기본 값 추가.
- [x] 자바스크립트 파일을 타입스크립트 파일로 변환.
- [x] `tsc` 명령어로 타입스크립트 컴파일 하기.

2. 명시적인 `any` 선언하기.

   -`tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가.

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
