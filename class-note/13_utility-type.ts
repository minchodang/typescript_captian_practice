interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 api 함수.
function fetchProducts(): Promise<Product[]> {
  //...
}

// 이렇게 인터페이스를 따로 설정할 수 도 있지만, 중복 코드가 발생함.
// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 이때 유틸리티를 쓰면 인터페이스 하나만 가지고도 일부의 속성만 뽑아내기도 가능.\
// 이처럼 pick을 활용해서 내가 원하는 타입의 속성만 뽑아서 사용 가능. 불필요하게 중복된
// 타입 선언 피할 수 있음.
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수.
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(
  shoppingItem: Pick<Product, 'id' | 'name' | 'price'>
) {}

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수.
// 속성들을 옵셔널로 할 수도 있지만, 파셜을 쓰면 동일한 효과다.
// 프로덕트의 모든 부분집합을 아래처럼 partial로 쓸 수 있다.
interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}

type updateProduct = Partial<Product>;

function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// 물론 이렇게 추가로 옵셔널로 만들 수 도 있지만, 위의 프로필만
//을 이용해서 만들 수도 있다.
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1. 접근법 1.
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2. 축약판. 반복문 돌리는 것과 동일한 방식. - 파셜과 비슷해 보이지만,
// 사실 실제 파셜타입을 구현한 것은 아님. 이걸 더 줄일 수 있다.
// 이렇게 포인문을 돌린 것과 같은 형태가 후에 배울 맵드 타입임.
type UserProfileUpdate2 = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

// #3. 더 줄이기. 키 오브로 자체적으로 순회하는 효과가 발생 함.
// 파셜에 가까워진 것. 이것은 다만 유저 프로필에 국한된 타입이다.
type UserProfileKeys = keyof UserProfile;
type UserProfileUpdate3 = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4. 최종 파셜 구현.
// 실제로 정의된 타입들에 옵셔널한 값들을 넣겠다고 하면, 타입을 넘겨받을 수 있는 형태
// 즉, 제네릭을 쓰면 된다. 아래가 바로 파셜의 구현체다.

type Subset<T> = {
  [p in keyof T]?: T[p];
};

// #5. 결론
// 유틸리티 타입은 기존의 불 필요한 코드를 줄일 수 있는 측면에서 장점.
// 또한, 직접 구현체로 커스텀하게 만들어서 사용도 가능.
