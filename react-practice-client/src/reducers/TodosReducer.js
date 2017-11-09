export default function TodosReducer(state={loading: false, todos: []}, action){
    switch(action.type){
        case "LOADING":
            return Object.assign({}, state, {loading: true});
        case "GET_TODOS":
            return Object.assign({}, state, {loading: false, todos: action.payload});
        case "TOGGLE_COMPLETE":
            var todos = [...state.todos];
            var todo = todos.find(todo => todo.id === action.payload.id);
            var todoIndex = todos.indexOf(todo);
            todos.splice(todoIndex, 1, action.payload);
            return Object.assign({}, state, {loading: false, todos});
        case "DELETE_TODO":
            var todos = [...state.todos];
            var todo = todos.find(todo => todo.id === action.payload.id);
            var todoIndex = todos.indexOf(todo);
            todos.splice(todoIndex, 1);
            return Object.assign({}, state, {loading: false, todos});
        case "ADD_TODO":
            return Object.assign({}, state, {loading: false, todos: [...state.todos, action.payload]})
        default:
            return state;
    }
}