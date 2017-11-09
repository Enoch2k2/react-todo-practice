import 'whatwg-fetch';

const LOCALHOST = 'http://localhost:3001/api';

export function getTodos() {
    return dispatch => {
        dispatch({type: "LOADING"});
        return fetch(LOCALHOST + '/todos')
            .then(res => res.json())
            .then(todos => dispatch({type: "GET_TODOS", payload: todos}))
    }
}

export function toggleComplete(id){
    return dispatch => {
        dispatch({type: "LLOADING"});
        return fetch(LOCALHOST + '/todos/' + id, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(todo => dispatch({type: "TOGGLE_COMPLETE", payload: todo}))
    }
}

export function deleteTodo(id){
    return dispatch => {
        dispatch({type: "LOADING"});
        return fetch(LOCALHOST + '/todos/' + id, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(message => dispatch({type: "DELETE_TODO", payload: id}))
    }
}