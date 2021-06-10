import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://jsonplaceholder.typicode.com/todos/',
        headers: {
            'API-KEY': 'c26084be-866c-40df-90a7-343be1166fee'
        }
    }
);

export const todosAPI = {
    getTodos(currentPage = 1) {
        return instance.get(`${currentPage}`)
            .then(response => response.data);
    }
};
