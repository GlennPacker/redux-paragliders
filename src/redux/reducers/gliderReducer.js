import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gliderReducer(state = initialState.gliders, action) {
    switch (action.type) {
        case types.GLIDERS_LIST_LOADED_SUCCESS:
            return {
                ...state,
                list: action.gliders
            }
        case types.GLIDERS_LIST_LOADED_FAILED:
            return {
                ...state,
                error: action.error
            }
        case types.GLIDER_SAVE_SUCCESS:
            return {
                list: [
                    ...state.list.filter(r => r.id !== action.glider.id),
                    action.glider
                ]
            }
        default:
            return state;
    }
}
