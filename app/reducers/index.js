import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const Charts = async (state = {}, action) => {
    console.log(state, action);
    switch(action.type) {
        case types.PIE_DATA_LOADING:
            return {...state, PieChart: {isfetching: true, contains: null, failed: false}};
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    Charts,
    routing,
});

export default rootReducer;
