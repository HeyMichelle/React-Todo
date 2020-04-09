import React from "react";
import "./todoStyles.css";

function Todo(props) {
	console.log("Todo Component props", props);
	return (
		<div>
			<h2
				className={`data${props.data.completed ? " completed" : ""}`} //should we use null?
				onClick={() => props.toggleComplete(props.data.id)}
			>
				{props.data.task}
			</h2>
		</div>
	);
}

export default Todo;
