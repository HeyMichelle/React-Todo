import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList(props) {
	console.log("TodoList", props);
	return (
		<div className="header">
			<h1>~ Todo List ~</h1>
			{/* edit style for Todo List Header */}
			<TodoForm addTask={props.addTask} />
			{/* Go to TodoForm, edit button styles */}
			{props.data.map(item => {
				return (
					<Todo key={item.id} data={item} toggleComplete={props.toggleComplete} />
				);
			})}

			<button className="clear-btn" onClick={props.clearList}>
				Clear Completed
			</button>
			{/* edit button style for .clear-btn */}
		</div>
	);
}

// in TODO onclick is the same as toggleComplete (renaming props)

export default TodoList;
//  todolist wrapper
