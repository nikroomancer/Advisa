import {CHANGE_TYPE, UPDATE_VALUE, UPDATE_RESULT } from '../actions/calculator';
import update from 'immutability-helper';

const initialState = {
    type: 'add',
    firstValue: 0,
    secondValue: 0,
    thirdValue: 0,
    result: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TYPE:
            return update(state, {type: {$set:action.payload}});
        case UPDATE_VALUE:
            return update(state, {[action.payload.valueBox]: {$set: action.payload.value}});
        case UPDATE_RESULT:
            return update(state, {result: {$set: action.payload}});
        default:
            return state;
    }
}
