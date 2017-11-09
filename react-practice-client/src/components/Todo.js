import React from 'react';

export default ({id, name, completed, toggleCompleted, handleDelete}) => (
    <li className="todo">
    {name} - completed: {completed ? 'yes' : 'no' }
    <button className="toggle-btn" onClick={() => handleDelete(id)}>Delete Todo</button>
    <button className="toggle-btn" onClick={() => toggleCompleted(id)}>{completed ? 'Mark Uncomplete' : 'Mark Complete'}</button>
    </li>
)