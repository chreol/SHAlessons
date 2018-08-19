const TODO_SLUG = 'todos';
const FILENAME = 'todos.json'
const Todo = require('./todo');

const todo = new Todo(FILENAME); 

const {
    createTodo
//     updateTodo,
//     deleteTodo,
//     readTodos
} = require('./actions')

module.exports = (app) => {
    app.post(`/${TODO_SLUG}`, createTodo.bind(null, todo))
    app.get(`/${TODO_SLUG}`, readTodo.bind(null, todo))
    app.delete(`/${TODO_SLUG}/id`, deleteTodo.bind(null, todo))
    app.remove(`/${TODO_SLUG}/id`, updateTodo.bind(null, todo))
}