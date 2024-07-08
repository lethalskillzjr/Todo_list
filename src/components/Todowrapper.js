import React, { useState, useEffect} from 'react';
import Todoform from './Todoform';
import Todo from './Todo';

const Todowrapper = () => {
  const [todos, setTodos] = useState([]);

  //fectch all todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch('http://localhost:7000/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  };

  // add a todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);

    // Send POST request to backend to add todo
    fetch('http://localhost:7000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New todo added:', data);
        fetchTodos();
      })
      .catch(error => {
        console.error('Error adding new todo:', error);
      });
  };

  //update a todo
  const updateTodo = (id, updatedTask) => {
    
    const payload = {
      task: updatedTask
    };
    
    fetch(`http://localhost:7000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Todo updated:', data);
      fetchTodos();
    })
    .catch(error => {
      console.error('Error adding new todo:', error);
    });
  }

  //delete a todo
  const deleteTodo = (id) => {
    fetch(`http://localhost:7000/todos/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log('Todo deleted', data);
      fetchTodos();
    })
    .catch(error => {
      console.error('Error deleting todo:', error);
    });
  }

  return (
    <div className='Todowrapper container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h1>Get Things Done</h1>
          <Todoform addTodo={addTodo}  />
          {todos.map((todo, index) => (
            <Todo 
              task={todo} 
              key={index} 
              onUpdate={(updatedTask) => updateTodo(todo._id, updatedTask)}
              onDelete={() => deleteTodo(todo._id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todowrapper;
