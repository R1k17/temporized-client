import React, {Component} from 'react';
import TodoTask from './TodoTask';
import AddTodoForm from './AddTodoForm';
import * as apiCalls from '../api';

class TodoList extends Component {
    constructor(props){
        super(props);
        // later populate with api data see min 1:30 >> https://www.udemy.com/the-advanced-web-developer-bootcamp/learn/v4/t/lecture/8569516?start=15
        this.state = {
            todos: []
        }
        this.addTask = this.addTask.bind(this);
    }
   
    componentDidMount() {
        this.loadTodos();
    }

    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }

    async addTask(task) {
        let newTodo = await apiCalls.addTodo(task);
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    async deleteTask(id) {
        await apiCalls.deleteTodo(id);
            const todos = this.state.todos.filter(todo => todo._id !== id);
            this.setState({todos: todos});
    }

    async toggleTask(task) {
        let updatedTodo = await apiCalls.toggleTodo(task);
        const todos = this.state.todos.map(todo => (todo._id === updatedTodo._id)
        ? {...todo, completed: !todo.completed}
        : todo
        )
        this.setState({todos: todos});
    }

    render() {
        const todos = this.state.todos.map((task) => (
            <TodoTask 
                key = {task._id}
                {...task}
                onDelete = {this.deleteTask.bind(this,task._id)}
                onToggle = {this.toggleTask.bind(this,task)}
            />
        ))
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos}
                </ul>
                <AddTodoForm addTask={this.addTask}/>
            </div>
        )
    }
}

export default TodoList;