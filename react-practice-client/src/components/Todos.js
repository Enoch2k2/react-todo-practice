import React, { Component } from 'react';

import Todo from './Todo';

const todos = [
    {
      "id": 6,
      "name": "walk the dog",
      "completed": false,
      "created_at": "2017-11-09T15:00:45.450Z",
      "updated_at": "2017-11-09T15:00:45.450Z"
    },
    {
      "id": 7,
      "name": "work",
      "completed": true,
      "created_at": "2017-11-09T15:02:00.231Z",
      "updated_at": "2017-11-09T15:02:00.231Z"
    }
  ]

class Todos extends Component {
    render(){
        return (
            <div>
                <ul>
                    {todos.map(todo => <Todo key={todo.id} name={todo.name} completed={todo.completed} />)}
                </ul>
            </div>
        )
    }
}

export default Todos;