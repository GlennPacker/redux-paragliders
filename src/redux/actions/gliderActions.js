import * as types from './actionTypes';
import * as gliderApi from "../../api/gliderApi";

export function createGlider(glider) {
    return {
        type: types.CREATE_GLIDER,
        glider
    }
}

export function loadGlidersSuccess(gliders) {
    return { type: types.GLIDERS_LIST_LOADED_SUCCESS, gliders };
}

export function loadGliders() {
    return function (dispatch) {
        return gliderApi.getGliders()
            .then(gliders => {
                dispatch(loadGlidersSuccess(gliders))
            })
            .catch(error => {
                // dispatch({ type: types.GLIDERS_LIST_LOADED_FAILED, error });
                throw error;
            })
    }
}

