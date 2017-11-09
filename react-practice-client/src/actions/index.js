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