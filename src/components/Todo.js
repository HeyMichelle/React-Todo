import React from 'react';

const Todo = props => {
    console.log("Todo Props:", props);

    return (
        <div
            className={`item${props.item.completed ? " completed " : ""}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.todo.taskName}</p>
        </div>
    );
};

export default Todo;
