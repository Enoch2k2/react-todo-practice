export default function TodosReducer(state={loading: false, todos: []}, action){
    switch(action.type){
        case "LOADING":
            return Object.assign({}, state, {loading: true});
        case "GET_TODOS":
            return Object.assign({}, state, {loading: false, todos: action.payload});
        default:
            return state;
    }
}