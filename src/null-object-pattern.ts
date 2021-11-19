class User {
  constructor(public id: number, public name: string) {}

  hasAccess() {
    return this.name === 'Bob'
  }
}

// Create extra class for null object to return if user not found
class NullUser {
  id: number
  name: string

  constructor() {
    this.id = -1
    this.name = 'Guest'
  }

  hasAccess() {
    return false
  }
}

const users = [new User(1, 'Bob'), new User(2, 'John')]

function getUser(id: number) {
  const user = users.find(user => user.id === id)

  if (!user) return new NullUser()

  return user
}

function printUser(id: number) {
  const user = getUser(id)

  // Can use result directly without checking null
  console.log('Hello', user?.name)

  // The same
  if (user?.hasAccess()) {
    console.log('You have access')
  } else {
    console.log('You are not allowed here')
  }
}

printUser(3)

export {}
