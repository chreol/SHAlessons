let fs = require('fs');
let STORE_FILE_NAME = ''
let DEFAULT_ENCODING = 'UTF8'


module.exports.readFile = (args)=> {
return new Promise ((resolve, reject)=>{
    fs.readFile(STORE_FILE_NAME,DEFAULT_ENCODING,
    (err,data) => err? reject(err) : resolve(data))
    })

}

module.exports.deleteFile = (args) =>{
    return new Promise((resolve,reject)=>{
        fs.unlink('newFile.txt',(err,data)=>err? reject(err) : resolve(data))
    })
}

module.exports.writeFile = (content)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(STORE_FILE_NAME, content, 
        (err,data)=> err? reject(err) : resolve(data))
    })
}

module.exports.appendFile = (args)=>{
    return new Promise((resolve,reject)=>{
        fs.appendFile(STORE_FILE_NAME,args,
        (err,data) => err? reject(err) : resolve(data))
    })
}