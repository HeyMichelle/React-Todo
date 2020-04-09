import React from "react";

// because you store state you use class components, following this format
// constructor, form, changeHandler, submitHandler
class TodoForm extends React.Component {
  // constructor with state
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  changeHandler = e => {
    // console.log(e.target.value); will show event changes in console
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    // console.log("state prop", this.state.userInput);

    return (
      <form onSubmit={this.submitTask}>
        <label htmlFor="addTask">Add task: </label>
        <input
          type="text"
          id="addTask"
          name="userInput"
          value={this.state.userInput} //value should always be what the current state is for the component you're working in
          placeholder="Add a new task..."
          onChange={this.changeHandler}
        />
        <button type="submit" className="submitTask">
          Submit task
        </button>
      </form>
    );
  }
}

export default TodoForm;
