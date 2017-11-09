import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Todo from './Todo';
import { getTodos, toggleComplete, deleteTodo, addTodo } from '../actions';

class Todos extends Component {
    constructor(props){
        super(props);

        this.state = {
            todo: {
                name: ''
            }
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            todo: Object.assign({}, this.state.todo, {[name]: value})
        })
    }

    componentDidMount(){
        this.props.getTodos();
    }

    handleToggle = (id) => {
        this.props.toggleComplete(id);
    }

    handleDelete = (id) => {
        this.props.deleteTodo(id);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({todo: Object.assign({}, this.state.todo, {name: ''})})
    }

    render(){
        const {todos} = this.props;
        const completedTodos = todos.filter(todo => todo.completed);
        const incompleteTodos = todos.filter(todo => !todo.completed);
        return (
            <div>
                {todos.find(todo => !todo.completed) ?
                   <div>
                     <h3>Not Completed</h3>
                       <ul>
                         {incompleteTodos.map((todo, i) => <Todo key={i} id={todo.id} name={todo.name} completed={todo.completed} toggleCompleted={this.handleToggle} handleDelete={this.handleDelete} />)}
                       </ul>
                   </div>
                : null}
                {todos.find(todo => todo.completed) ?
                   <div>
                     <h3>Completed</h3>
                       <ul>
                         {completedTodos.map((todo, i) => <Todo key={i} id={todo.id} name={todo.name} completed={todo.completed} toggleCompleted={this.handleToggle} handleDelete={this.handleDelete} />)}
                       </ul>
                   </div>
                : null}
                <h3>Create Todo</h3>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" value={this.state.todo.name} onChange={this.handleChange} />
                    <input type="submit" value="Create Todo" />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todo.todos
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getTodos, toggleComplete, deleteTodo, addTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);