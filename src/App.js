import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        { name: "Clean dishes", completed: false },
        { name: "Take out the dog", completed: false },
        { name: "Walk the thrash", completed: true }
      ],
      inputTodo: { name: "", completed: false },
      showCompleted: true
    };
    this.changeStatusOnItem = this.changeStatusOnItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let inputTodo = { name: event.target.value, completed: false };
    this.setState({ inputTodo });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todoItems: [...this.state.todoItems, this.state.inputTodo],
      inputTodo: { name: "", completed: false }
    });
  }

  changeStatusOnItem(index) {
    const todoItems = this.state.todoItems;

    todoItems[index].completed = !todoItems[index].completed;
    this.setState({
      todoItems
    });
  }

  render() {
    const todoItems = this.state.todoItems.map((item, index) => {
      if (this.state.showCompleted) {
        if(item.completed)
      }
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add todo:
            <input type="text" onChange={this.handleChange} name="todo" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>{todoItems}</ul>
      </div>
    );
  }
}

export default App;
