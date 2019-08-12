import * as types from './actionTypes';
import * as manufactuerApi from "../../api/manufacturerApi";

export function loadManufacturersSuccess(manufacturers) {
    return { type: types.MANUFACTURER_LIST_LOADED_SUCCESS, manufacturers };
}

export function loadManufacturers() {
    return function (dispatch) {
        return manufactuerApi.getManufacturers()
            .then(manufacturers => {
                dispatch(loadManufacturersSuccess(manufacturers))
            })
            .catch(error => {
                // dispatch({ type: types.MANUFACTURER_LIST_LOADED_FAILED, error });
                throw error;
            })
    }
}

