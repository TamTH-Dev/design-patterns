class FancyLogger {
  logs!: string[]
  static instance: FancyLogger

  constructor() {
    if (!FancyLogger.instance) {
      this.logs = []
      FancyLogger.instance = this
    }
    return FancyLogger.instance
  }

  log(message: string) {
    this.logs.push(message)
    console.log(`FANCY: ${message}`)
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`)
  }
}

const logger = new FancyLogger()
Object.freeze(logger)

export default logger
