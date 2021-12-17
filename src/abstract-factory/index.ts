interface ProductA {
  usefulMethodA: () => string
}

interface ProductB {
  usefulMethodB: () => string

  anotherUsefulMethodB: (collaborator: ProductA) => string
}

class ConcreteProductA1 implements ProductA {
  usefulMethodA() {
    return 'This is useful method from product A1'
  }
}

class ConcreteProductA2 implements ProductA {
  usefulMethodA() {
    return 'This is useful method from product A2'
  }
}

class ConcreteProductB1 implements ProductB {
  usefulMethodB() {
    return 'This is useful method from product B1' 
  }

  anotherUsefulMethodB(collaborator: ProductA) {
    const result = collaborator.usefulMethodA() 
    return `This is another useful method from product B1: ${result}`
  }
}

class ConcreteProductB2 implements ProductB {
  usefulMethodB() {
    return 'This is useful method from product B2' 
  }

  anotherUsefulMethodB(collaborator: ProductA) {
    const result = collaborator.usefulMethodA() 
    return `This is another useful method from product B2: ${result}`
  }
}

interface AbstractFactory {
  createProductA: () => ProductA
  createProductB: () => ProductB
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA1() 
  }

  createProductB() {
    return new ConcreteProductB1() 
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA2() 
  }

  createProductB() {
    return new ConcreteProductB2() 
  }
}

function client(factory: AbstractFactory) {
  const productA = factory.createProductA()
  const productB = factory.createProductB()

  console.log(productA.usefulMethodA())
  console.log(productB.usefulMethodB())
  console.log(productB.anotherUsefulMethodB(productA))
}

const factory1 = new ConcreteFactory1()
client(factory1)

const factory2 = new ConcreteFactory2()
client(factory2)

export {}
