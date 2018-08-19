const fs = require('fs')
const uuid = require('uuid/v4')
const DEFAULT_ENCODING = 'utf8';

class Todo {
    constructor(filename){
        this.filename = filename
    }

    // read file from server ans create an Array
    // create a new todo JSON with id
    // push the new todo into todos List
    // save - replace the new File
    // finally return todo

    async create(description){
        const todos = await this.read()

        const todo ={
            id : uuid(),
            done : false,
            description
        }
        todos.push(todo)
    
        await this._save(todos)
    
        return todo;
    }
    
    read(){
        return new promise (resolve =>{
            fs.readFile(this.filename, DEFAULT_ENCODING, (error, data)=>{
                if (error){
                    console.log(error)
                    return resolve([])
                }
                console.log(data)
                return resolve(JSON.parse(data))
            })    
        })
    }
    
    _save(todos){
        return new promise((resolve, reject) =>{
            fs.writeFile(
                this.filename,
                JSON.stringify(todos, null,2),
                error => error == null ? resolve() : reject(error)
            )
        })
    }
}
