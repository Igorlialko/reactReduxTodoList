import {ADD_JSON} from "../actions/actionTypes";


const apiReducer= (state=[],action) => {

    switch (action.type) {
        case ADD_JSON:{
            const { userId,id, title,completed } = action.payload;
            return[
                ...state,
                {
                    userId,
                    id,
                    title,
                    completed
                }
            ]
        }
        default:
           return  state;
        }
}
export default apiReducer;