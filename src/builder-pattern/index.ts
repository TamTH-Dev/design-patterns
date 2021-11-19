type AddressType = {
  zip: string
  street: string
}

type UserType = {
  name: string
  age?: number
  phone?: string
  address?: AddressType
}

class Address {
  constructor(public zip: string, public street: string) {}
}

// Solution 1
// class User {
//   constructor(public name: string) {}
// }

// class UserBuilder {
//   user: UserType
//
//   constructor(name: string) {
//     this.user = new User(name)
//   }
//
//   setAge(age: number) {
//     this.user.age = age
//     return this
//   }
//
//   setPhone(phone: string) {
//     this.user.phone = phone
//     return this
//   }
//
//   setAddress(address: AddressType) {
//     this.user.address = address
//     return this
//   }
//
//   build() {
//     return this.user
//   }
// }
//
// let user = new UserBuilder('Bob')
//   .setAge(10)
//   .setAddress(new Address('111', 'Main'))
//   .build()
// console.log(user)

// Solution 2
class User {
  name: string
  age?: number
  phone?: string
  address?: AddressType

  constructor(
    name: string,
    { age, phone, address }: Omit<UserType, 'name'> = {}
  ) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

const user = new User('Bob', { age: 10, address: new Address('111', 'Main') })
console.log(user)

export {}
