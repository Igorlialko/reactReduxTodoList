import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getApi} from "../../../redux/selectors/selectors";
import {Button} from "../../Button";
import {getTodosThunk} from "../../../redux/thunks/todosJSON";

const TodoRedux = () => {
  const api = useSelector(getApi)
  const dispatch = useDispatch();
const handleClick = (number) =>{
  for(let i=1 ; i<10 ; i++){
    dispatch(getTodosThunk(i))
  }
}
  return <>
    {api && api.length
        ? api.map((todo) => (
            <div
                className= 'todo-row'
                key={`todo-${todo.id}`}
            >
              <div key={todo.id} >
                {todo.title}
              </div>
            </div>
        )): < Button  className = 'btns'
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                      onClick={handleClick}
                      children='Please add a todo'/>}
      </>}

export default TodoRedux;
