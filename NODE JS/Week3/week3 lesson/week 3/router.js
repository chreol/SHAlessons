const TODO_SLUG = 'todos';

const FILENAME = 'todos.json';

const Todo = require('./todo');

const todo = new Todo(FILENAME);

const {
  createTodo,
  updateTodo,
  deleteTodo,
  readTodos
} = require('./actions')

//The bind() method creates a new function that, when called, has its this keyword set to the provided value,
//with a given sequence of arguments preceding any provided when the new function is called.
module.exports = (app) => {
  app.post(`/${TODO_SLUG}`,createTodo.bind(null, todo))

  app.get(`/${TODO_SLUG}`,readTodos.bind(null,todo))

  app.delete(`/${TODO_SLUG}/:id`,deleteTodo.bind(null,todo))

  app.put(`/${TODO_SLUG}/:id`,updateTodo.bind(null,todo))
}
