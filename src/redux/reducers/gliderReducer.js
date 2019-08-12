import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function gliderReducer(state = initialState.gliders, action) {
    switch (action.type) {
        case types.CREATE_GLIDER:
            return {
                ...state,
                list: [...state.list, { ...action.glider }],
                selectedGlider: { ...action.glider }
            }
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
        default:
            return state;
    }
}
