import * as types from '../actions/actionTypes';

export default function gliderReducer(state = { gliders: [] }, action) {
    switch (action.type) {
        case types.CREATE_GLIDER:
            return {
                ...state,
                gliders: [...state.gliders, { ...action.glider }],
                selectedGlider: { ...action.glider }
            }
        default:
            return state;
    }
}
