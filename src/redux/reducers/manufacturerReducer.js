import * as types from '../actions/actionTypes';

export default function manufacturerReducer(state = { manufacturers: [] }, action) {
    switch (action.type) {
        case types.MANUFACTURER_LIST_LOADED_SUCCESS:
            return {
                ...state,
                manufacturers: action.manufacturers
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
