import {addJson} from "../actions/actions";
import {todosAPI} from "../../api/api";


export const getTodosThunk /*ThunkCreator*/ = (currentPage) => {
    return async (dispatch) => {
        let data = await todosAPI.getTodos(currentPage);
        dispatch(addJson(data));
    }
};
