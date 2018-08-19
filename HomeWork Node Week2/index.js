let fsOperations = require('./fsOperations');
const cmd = process.argv[2];
const args = process.argv.slice(3);

function printHelp(){
    console.log(`option:
    List: Shows current to-dos, or shows an appropriate text if there are no to-dos
    ADDS: Adds a to-do item. All the words behind add are entered as 1 to-do item to the list.
    REMOVE: Removes a to-do item by its 1-base index, e.g. to remove second item, execute:
    RESET: Removes all to-do items from the list:
    Help: printHelp()
    `)
}
switch (cmd) {
    case 'list':
        fsOperations.readFile()
            .then(data => console.log(`To-Dos:\n${data}`))
          break;
    case 'add':
    // Buy groceries -- Brush teeth
        fsOperations.appendFile(args)
            .then(()=> fsOperations.readFile())
            .then(data => console.log(`To-Dos: \n${data}`))
          break;
    case 'remove':
        let newData;
        // remove 2
        fsOperations.readFile()
            .then(data => newData = data.split(`\n`).splice(args).join(`\n`))
            .then(() => fsOperations.writeFile(newData))
            .then(() => fsOperations.readFile())
            .then(data => console.log(`To-Dos:\n${data}`))
            .catch()
          break;
    case 'reset':
            // reset
        fsOperations.deleteFile()
            .then(() => fsOperations.writeFile(''))
            .then(() => fsOperations.readFile())
            .then(data => console.log(`To-Dos: \n${data}`))
          break;
    case 'help':
    printHelp()
          break;
    default:
          break;
}