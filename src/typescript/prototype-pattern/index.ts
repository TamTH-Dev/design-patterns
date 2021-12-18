class Prototype {
  public value: any

  public clone(): this {
    const clone = Object.create(this)
    return clone
  }
}

function client() {
  const p1 = new Prototype()

  p1.value = new Date()

  const p2 = p1.clone()

  console.log(p1.value === p2.value) // Expected value: true
}

client()

export {}
