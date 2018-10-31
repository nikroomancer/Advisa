export const CHANGE_TYPE = 'CHANGE_TYPE';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const UPDATE_RESULT = 'UPDATE_RESULT';


export const changeType = type => dispatch => {
    dispatch({ type: CHANGE_TYPE, payload: type});
};

export const updateValue = (value, valueBox) => dispatch => {
    dispatch({ type: UPDATE_VALUE, payload: {value, valueBox}});
};

export const updateResult= result => dispatch=> {
    dispatch({ type: UPDATE_RESULT, payload: result});
};
