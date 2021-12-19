class Target {
  constructor() {}

  request() {
    return 'Target: The default target behavior.'
  }
}

class Adaptee {
  constructor() {}

  specificRequest() {
    return 'Adaptee: The adaptee behavior'
  }
}

class Adapter extends Target {
  private adaptee: Adaptee

  constructor(adaptee: Adaptee) {
    super()
    this.adaptee = adaptee
  }

  request() {
    const customizedString = `Customized by adapter: ${this.adaptee.specificRequest()}`
    return customizedString
  }
}

function client(target: Target) {
  console.log(target.request())
}

const target = new Target()
client(target)

const adaptee = new Adaptee()
/**
 * Cannot pass adaptee to client because of unsuitable interface
 * client(adaptee)
 **/

// Transfer adaptee through adapter to make it suitable with client
const adaptedAdaptee = new Adapter(adaptee)
client(adaptedAdaptee)

export {}
