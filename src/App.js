import React, { useState, useEffect } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home todos={todos} deleteTodo={deleteTodo} />} />
        <Route path='/addTask' element={<AddTask addTodo={addTodo} />} />
      </Routes>
    </div>
  );
}

export default App;
