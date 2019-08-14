import * as types from './actionTypes';
import * as gliderApi from "../../api/gliderApi";

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

export function saveGlider(glider) {
    return function (dispatch) {
        return gliderApi
            .saveGlider(glider)
            .then(glider => {
                dispatch(saveGliderSuccess(glider))
            })
            .catch(error => {
                throw error;
            })
    }
}

export function saveGliderSuccess(glider) {
    return { type: types.GLIDER_SAVE_SUCCESS, glider }
}
