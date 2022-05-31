interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return {
    name: 'Tony',
    age: 33,
    skill: 'Iron Making',
  };
}

let tony = introduce();
// 기본적으로 유니언 타입은 타입들의 공통된 속성만 뽑아서 사용 가능.
// 따라서, 여기서는 name 외에 다른 속성은 사용 불가.
console.log(tony.name);

// 만약 다른 속성 사용을 위해서는 타입 단언을 쓰면 됨. 이런 식으로,
// 타입의 범위를 이렇게 좁혀 나가도록 한다. 하지만, 이렇게 타입 단언만 쓴다면,
// 코드가 더려워 진다.
if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}
// 이런 코드를 줄이기 위해 사용하는 것이 타입 가드다.

// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
