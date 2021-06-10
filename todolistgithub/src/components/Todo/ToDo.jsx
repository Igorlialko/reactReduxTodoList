import React from 'react';
import './ToDo.css';
import TodoList from './components/TodoList';
import TodoListJSON from "./components/TodoListJSON";

const ToDo = (props) => {
  return (
    <div className='todo-app'>
        {props.TodoList === "MY" ? <TodoList /> : <TodoListJSON /> }
        <div >
            {props.TodoList === "JSON" ? '' : 'please load from JSONplaceholder ... back to up '}
        </div>
    </div>
  )}

export default ToDo;
