const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let todos = [
  { id: 1, text: 'Learn backend', done: false },
  { id: 2, text: 'Play with Postman', done: false },
  //Add more
];

// GET /todos - get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - create a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'text is required' });
  }

  const newTodo = {
    id: todos.length + 1,
    text,
    done: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PATCH /todos/:id - mark a todo as done
app.patch('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.done = true;
  res.json(todo);
});

// DELETE /todos/:id - delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deletedTodo = todos[index];
  todos.splice(index, 1);

  res.json({
    message: 'Todo deleted successfully',
    todo: deletedTodo
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
