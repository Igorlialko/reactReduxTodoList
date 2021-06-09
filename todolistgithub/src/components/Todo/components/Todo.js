import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../../redux/selectors/selectors";
import {completeTodo, removeTodo} from "../../../redux/actions/actions";


const TodoRedux = () => {
  const todos = useSelector( getTodos)
  const dispatch = useDispatch();
  const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    if (edit.id) {
        return <TodoForm edit={edit} setEdit={setEdit}  />;
    }
    return <>
      {todos && todos.length
      ? todos.map((todo) => (
      <div
          className={todo.completed ? 'todo-row complete' : 'todo-row'}
          key={`todo-${todo.id}`}
      >
        <div key={todo.id} onClick={() => dispatch(completeTodo(todo.id))}>
          {todo.text}
        </div>
        <div className='icons'>
          <RiCloseCircleLine
              onClick={() => dispatch(removeTodo(todo.id))}
              className='delete-icon'
          />
         <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className='edit-icon'
          />
        </div>
      </div>
  )):'Please add a todo'}
      </>
}



/*

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};
*/

export default TodoRedux;
