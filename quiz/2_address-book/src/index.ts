interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  // 클래스의 컨스트럭터는 기본적인 타입 정의가 되어 있지 않음.
  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  // 만약 phoneType에 오타가 난 경우 에러 처리가 안 될 수 있다. 이럴 경우,
  // 타입의 종류를 한정시킨다면 enum을 활용할 수 있음.

  findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
