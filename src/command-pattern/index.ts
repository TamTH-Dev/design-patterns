class Calculator {
  value: number
  history: Array<
    | AddCommand
    | SubtractCommand
    | MultiplyCommand
    | DivideCommand
    | AddThenMultiplyCommand
  >

  constructor() {
    this.value = 0
    this.history = []
  }

  executeCommand(
    command:
      | AddCommand
      | SubtractCommand
      | MultiplyCommand
      | DivideCommand
      | AddThenMultiplyCommand
  ) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command:
      | AddCommand
      | SubtractCommand
      | MultiplyCommand
      | DivideCommand
      | AddThenMultiplyCommand
      | undefined = this.history.pop()
    this.value = command?.undo(this.value) || 0
  }
}

class AddCommand {
  valueToAdd: number

  constructor(valueToAdd: number) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue: number) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue: number) {
    return currentValue - this.valueToAdd
  }
}

class SubtractCommand {
  valueToSubtract: number

  constructor(valueToSubtract: number) {
    this.valueToSubtract = valueToSubtract
  }

  execute(currentValue: number) {
    return currentValue - this.valueToSubtract
  }

  undo(currentValue: number) {
    return currentValue + this.valueToSubtract
  }
}

class MultiplyCommand {
  valueToMultiply: number

  constructor(valueToMultiply: number) {
    this.valueToMultiply = valueToMultiply
  }

  execute(currentValue: number) {
    return currentValue * this.valueToMultiply
  }

  undo(currentValue: number) {
    return currentValue / this.valueToMultiply
  }
}

class DivideCommand {
  valueToDivide: number

  constructor(valueToDivide: number) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue: number) {
    return currentValue / this.valueToDivide
  }

  undo(currentValue: number) {
    return currentValue * this.valueToDivide
  }
}

class AddThenMultiplyCommand {
  addCommand: AddCommand
  multiplyCommand: MultiplyCommand

  constructor(valueToAdd: number, valueToMultiply: number) {
    this.addCommand = new AddCommand(valueToAdd)
    this.multiplyCommand = new MultiplyCommand(valueToMultiply)
  }

  execute(currentValue: number) {
    const newValue = this.addCommand.execute(currentValue)
    return this.multiplyCommand.execute(newValue)
  }

  undo(currentValue: number) {
    const newValue = this.multiplyCommand.undo(currentValue)
    return this.addCommand.undo(newValue)
  }
}

const calculator = new Calculator()
calculator.executeCommand(new AddThenMultiplyCommand(10, 3))
console.log(calculator.history)
console.log(calculator.value)
calculator.undo()
console.log(calculator.history)
console.log(calculator.value)

export {}
