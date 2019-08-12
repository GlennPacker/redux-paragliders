import * as types from '../actions/actionTypes';

export default function gliderReducer(state = { gliders: [] }, action) {
    switch (action.type) {
        case types.CREATE_GLIDER:
            return {
                ...state,
                gliders: [...state.gliders, { ...action.glider }],
                selectedGlider: { ...action.glider }
            }
        case types.GLIDERS_LIST_LOADED_SUCCESS:
            return {
                ...state,
                gliders: action.gliders
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
