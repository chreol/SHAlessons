const fs = require('fs')
const STORE_FILE_NAME = 'chreol.txt'
const DEFAULT_ENCODING = 'UTF8'

module.exports.readFile = function(){
    return new Promise(function(resolve, reject){
        fs.readFile(STORE_FILE_NAME, DEFAULT_ENCODING, function(err, data){
            if (err){
                reject(err)
            } else {
                resolve (data)
            }
        })
    })
}

// module.exports.writeFile = function(){
//     return new Promise(function(resolve, reject){
// fs.writeFile('newFile.txt', 'Hello From New File', function(err, data){
// if (err){
//     reject(err)
// } else {
//     resolve(data)
// }
// })
//     })
// }

module.exports.writeFile = function(content){
    return new Promise(function(resolve, reject){
fs.writeFile(STORE_FILE_NAME, content, function(err, data){
if (err){
    reject(err)
} else {
    resolve(data)
}
})
    })
}

module.exports.deleteFile = function(){
    return new Promise(function(resolve, reject){
fs.unlink('newFile.txt', function(err, data){
if (err){
    reject(err)
} else {
    resolve(data)
}
})
    })
}

// // working
// module.exports.appendFile = function(){
//     return new Promise(function(resolve, reject){
// fs.appendFile('SHOW_FILE_NAME',"appendFile", function(err, data){
// if (err){
//     reject(err)
// } else {
//     resolve(data)
// }
// })
//     })
// }

module.exports.appendFile = (args) => {
    return new Promise((resolve, reject) =>{
        fs.appendFile(STORE_FILE_NAME,args, 
        (err, data) => err? reject(err) : resolve(data))
    })
}

