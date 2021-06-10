import React, { useState } from 'react';
import Todo from './TodoJSON';


const TodoListRedux = () => {
    return (
        <>
            <h1>What's the Plan for Today in JSONplaceholder?</h1>
            <Todo/>
        </>
    );
}

export default TodoListRedux;
