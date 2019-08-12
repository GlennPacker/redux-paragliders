import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function manufacturerReducer(state = initialState.manufacturers, action) {
    switch (action.type) {
        case types.MANUFACTURER_LIST_LOADED_SUCCESS:
            return {
                ...state,
                list: action.manufacturers
            }
        case types.MANUFACTURER_LIST_LOADED_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}
