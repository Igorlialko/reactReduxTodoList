import {ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO} from "../actions/actionTypes";

const defaultState = [{id:5744,text:'I hope we’ll see  some more of you! :)',completed:true}];

const todoMap = (state = defaultState, action) => {

  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return [
         {
          id,
          text,
          completed:false
        },
        ...state
      ]
    }
      case REMOVE_TODO:
          return state.filter(todo =>
              todo.id !== action.id
          )
      case EDIT_TODO:
          return state.map(todo =>
              todo.id === action.id ?
                  { ...todo, text: action.text } :
                  todo
          )
      case COMPLETE_TODO:
          return state.map(todo =>
                  todo.id === action.id ?
                      { ...todo, completed: !todo.completed } :
                      todo
              )
      default:
      return state;
  }
};

export default todoMap;
