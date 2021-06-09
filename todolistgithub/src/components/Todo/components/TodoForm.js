import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo, updateTodo} from "../../../redux/actions/actions";


const TodoFormRedux = (props) => {
  const [input, setInput] = useState( props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = e => {
    setInput(e.target.value);
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
     if(props.edit){
       e.preventDefault();
    dispatch(updateTodo(props.edit.id,input));
    setInput('');
    props.setEdit({
      id: null,
      value: ''
    })} else {e.preventDefault();
      dispatch(addTodo(input));
      setInput('')}
  }

  return  <form  className='todo-form'>
    {props.edit ? (
        <>
          <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
    ) : (
        <>
          <input
              type='string'
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
    )}
  </form>
}
/*

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
*/

export default TodoFormRedux;
