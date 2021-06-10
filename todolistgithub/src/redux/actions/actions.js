import {ADD_JSON, ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId ,
    text
  }
});

export const removeTodo = (id) => ({
    type:REMOVE_TODO,
  id
})
export const completeTodo = (id) => ({
    type:COMPLETE_TODO,
  id
})

export const updateTodo = ( id= null , text='') => ({
  type:EDIT_TODO,
  id,
  text
})

export const addJson = ({userId,
                          id,
                          title,
                          completed
                        }) => ({
  type: ADD_JSON,
  payload: {
    userId,
    id,
    title,
    completed
  }
});
