import TodosReducer from './TodosReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    todo: TodosReducer
})