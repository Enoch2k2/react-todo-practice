import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Todo from './Todo';
import { getTodos } from '../actions';

class Todos extends Component {
    componentDidMount(){
        this.props.getTodos();
    }

    render(){
        const {todos} = this.props;
        return (
            <div>
                <ul>
                    {todos.map(todo => <Todo key={todo.id} name={todo.name} completed={todo.completed} />)}
                </ul>
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
    return bindActionCreators({getTodos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);