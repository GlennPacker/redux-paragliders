import * as types from './actionTypes';

export function createGlider(glider) {
    return {
        type: types.CREATE_GLIDER,
        glider
    }
}