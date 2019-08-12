import { combineReducers } from 'redux'
import gliders from './gliderReducer';
import manufacturers from './manufacturerReducer';

const rootReducer = combineReducers({
    gliders,
    manufacturers
})

export default rootReducer;
