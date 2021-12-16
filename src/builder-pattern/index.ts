interface Builder {
  buildRoof: () => void
  buildDoor: () => void
  buildBathRoom: () => void
  buildLivingRoom: () => void
}

class HouseBuilder implements Builder {
  private house!: House

  constructor() {
    this.reset()
  }

  reset() {
    this.house = new House()
  }

  buildRoof() {
    this.house.buildMoreStuff('Roof')
  }

  buildDoor() {
    this.house.buildMoreStuff('Door')
  }

  buildBathRoom() {
    this.house.buildMoreStuff('Room')
  }

  buildLivingRoom() {
    this.house.buildMoreStuff('Living room')
  }

  getHouse() {
    const house = this.house
    this.reset()
    return house
  }
}

class House {
  stuffs: string[]

  constructor() {
    this.stuffs = [] 
  }

  buildMoreStuff(stuff: string) {
    this.stuffs.push(stuff)
  }

  getStuffs() {
    return this.stuffs
  }
}

class Director {
  private builder!: Builder

  setBuilder(builder: Builder) {
    this.builder = builder
  }
  
  buildThreeStuff() {
    this.builder.buildDoor()
    this.builder.buildRoof()
    this.builder.buildBathRoom()
  }

  buildOneStuff() {
    this.builder.buildLivingRoom()
  }
}

function client(director: Director) {
  const houseBuilder = new HouseBuilder()
  director.setBuilder(houseBuilder)

  director.buildOneStuff()
  const houseOne = houseBuilder.getHouse()
  console.log('House 1', houseOne.getStuffs())

  director.buildThreeStuff()
  const houseTwo = houseBuilder.getHouse()
  console.log('House 2', houseTwo.getStuffs())
}

const director = new Director()
client(director)

export {}
