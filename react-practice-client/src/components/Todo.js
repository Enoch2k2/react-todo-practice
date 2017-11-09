import React, { Component } from 'react';

export default ({name, completed}) => (
    <li className="todo">{name} - completed: {completed ? 'yes' : 'no' }</li>
)