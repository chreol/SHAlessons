// const cmd = process.argv[2]
// const args = process.argv.slice(2)
// let example = 'hello again example'
// console.log(cmd)

// // const fs = require('fs')
// const STORE_FILE_NAME = 'chreol.txt'
// const DEFAULT_ENCODING = 'UTF8'

// let readFile = function(){
//     return new Promise(function(resolve, reject){
//         fs.readFile(STORE_FILE_NAME, DEFAULT_ENCODING, function(err, data){
//             if (err){
//                 reject(err)
//             } else {
//                 resolve (data)
//             }
//         })
//     })
// }
// readFile().then(data => console.log(`content: ${data}`))

// let fsOperations = require('./fsOperations')

// fsOperations.readFile()
// .then(data => console.log(`content: ${data}`))

// // fsOperations.writeFile()
// // // .then(data => console.log(`content: ${data}`))

// // fsOperations.deleteFile()

// fsOperations.appendFile('/n This_Chreol')
// .then(data => console.log(`content: ${data}`))

const fsOperations = require ('./fsOperations.js')
const cmd = process.argv[2]
const args = process.argv.slice(3)

function printHelp(){
    console.log(
        `options:
        add: adds a chreol item,
        remove: remove an item by index
        help: print print
        list: show all chreol items
        reset: removes all items!!`
    )
}

switch (cmd){
    case 'add':
        fsOperations.appendFile(args)
        .then(() => fsOperations.readFile())
        .then(data => console.log(`To-Dos:\n${data}`))
        .catch()
    break;
        case 'remove':
        let newData
        fsOperations.readFile()
        .then(data => newData = data.split(`\n`).splice(args).join(`\n`))
        .then(() =>fsOperations.writeFile(newData))
        .then(() => readFile())
        .then(data =>console.log(`To-Dos:\n${data}`))
    break;
    case 'help':
        printHelp()
    break;
        case 'list':
    break;
        case 'reset':
    break;
        default:
        console.log('cannot understand')
        break;
}