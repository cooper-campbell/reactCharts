import * as types from './types';
import fetch from 'isomorphic-fetch';
export function example(filter) {
    return {
        type: types.FILTER,
        filter,
    };
}

export function startPieDataLoad() {
    return {
        type: types.PIE_DATA_LOADING
    };
};

export function finishPieDataLoad(data) {
    return {
        type: (data.err === true) ? types.PIE_DATA_LOADED_FAIL : types.PIE_DATA_LOADED_SUCCESS,
        data: data.msg
    };
};


export function fetchPieChartData() {
    return (dispatch) => {
        dispatch(startPieDataLoad);
        return fetch('http://localhost:3001/cm/piechart').then(response => response.json()).then(json => dispatch(finishPieDataLoad(json)));
    };
};
