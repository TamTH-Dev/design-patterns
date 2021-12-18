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
    this.house.setRoof('Roof')
    return this
  }

  buildDoor() {
    this.house.setDoor('Door')
    return this
  }

  buildBathRoom() {
    this.house.setBathRoom('Room')
    return this
  }

  buildLivingRoom() {
    this.house.setLivingRoom('Living room')
    return this
  }

  getHouse() {
    const house = this.house
    this.reset()
    return house
  }
}

class House {
  private stuffs: string[]
  private roof!: string
  private livingRoom!: string
  private bathRoom!: string
  private door!: string

  constructor() {
    this.stuffs = [] 
  }

  setRoof(roof: string) {
    this.roof = roof
    this.stuffs.push(roof)
  }

  setDoor(door: string) {
    this.door = door
    this.stuffs.push(door)
  }

  setLivingRoom(livingRoom: string) {
    this.livingRoom = livingRoom
    this.stuffs.push(livingRoom)
  }

  setBathRoom(bathRoom: string) {
    this.bathRoom = bathRoom
    this.stuffs.push(bathRoom)
  }

  getRoof() {
    return this.roof
  }

  getBathRoom() {
    return this.bathRoom
  }

  getLivingRoom() {
    return this.livingRoom
  }

  getDoor() {
    return this.door
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

  buildOneStuff() {
    this.builder.buildLivingRoom()
  }

  buildTwoStuffs() {
    this.builder.buildDoor()
    this.builder.buildLivingRoom()
  }
  
  buildThreeStuffs() {
    this.builder.buildDoor()
    this.builder.buildRoof()
    this.builder.buildBathRoom()
  }
}

function client(director: Director) {
  const houseBuilder = new HouseBuilder()
  director.setBuilder(houseBuilder)

  director.buildOneStuff()
  const houseOne = houseBuilder.getHouse()
  console.log('House 1', houseOne.getStuffs())

  director.buildTwoStuffs()
  const houseTwo = houseBuilder.getHouse()
  console.log('House 2', houseTwo.getStuffs())

  director.buildThreeStuffs()
  const houseThree = houseBuilder.getHouse()
  console.log('House 3', houseThree.getStuffs())
}

const director = new Director()
client(director)

export {}
