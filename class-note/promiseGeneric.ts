// 비동기 처리 시에 프로미스 제네릭 타입을 설정해 줘야 한다.

function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
