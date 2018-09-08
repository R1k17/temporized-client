import React, {Component} from 'react';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const todos = 
    this.props.addTask(
      this.state.inputValue,
    )
    this.setState({todos, inputValue: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="inputText"
            autoComplete="off"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="add a new task"
            />
            <button
              type="submit"
            >
              Add Task
            </button>
        </form>
      </div>
    )
  }
}


export default AddTodoForm;