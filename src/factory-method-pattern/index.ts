interface Product {
  operation(): string
}

class ConcreteProduct1 implements Product {
  operation() {
    return 'This is the operation from concrete product 1'
  }
}

class ConcreteProduct2 implements Product {
  operation() {
    return 'This is the operation from concrete product 2'
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product

  public someOperation(): string {
    const product = this.factoryMethod()

    return `Creator: this is the demo with ${product.operation()}`
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1()
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2()
  }
}

function client(creator: Creator) {
  console.log(creator.someOperation())
}

const creator1 = new ConcreteCreator1()
client(creator1)

const creator2 = new ConcreteCreator2()
client(creator2)

export {}
