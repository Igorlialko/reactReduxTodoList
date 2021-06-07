import React from 'react';
import './ToDo.css';
import TodoList from './components/TodoList';

const ToDo = (props) => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default ToDo;
