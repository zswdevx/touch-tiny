class Program {
  constructor() {
    this.version = '1.0.0'
    this.args = []
    this.description = ''
    this.usage = ''
  }

  setVersion(version) {
    this.version = version
    return this
  }

  setDescription(desc) {
    this.description = desc
    return this
  }

  setUsage(usage) {
    this.usage = usage
    return this
  }

  showHelp() {
    const name = 'touch'
    console.log()
    console.log(`${name}@${this.version}`)
    console.log()
    console.log('Usage: ' + this.usage)
    console.log()
    console.log('Description:')
    console.log('  ' + this.description)
    console.log()
    console.log('Options:')
    console.log('  -v, --version     Output the version number')
    console.log('  -h, --help        Display help information')
    console.log()
    console.log('Examples:')
    console.log('  $ touch new-file.txt     # Create a new file')
    console.log('  $ touch folder/file.js   # Create a file with path')
    console.log('  $ touch newfolder        # Create a new folder')
    console.log()
    process.exit(0)
  }

  handleCommand(command) {
    switch (command) {
      case '-v':
      case '--version':
        console.log(this.version)
        process.exit(0)
      case '-h':
      case '--help':
        this.showHelp()
        process.exit(0)
    }
  }

  parse(argv) {
    this.args = argv.slice(2)

    if (this.args.length > 0) {
      const firstArg = this.args[0]
      this.handleCommand(firstArg)
    }

    if (this.args.length === 0) {
      this.showHelp()
      process.exit(0)
    }

    return this
  }
}

export default Program
