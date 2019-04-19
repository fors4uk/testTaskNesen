import {LIST_IS_ERROR, LIST_IS_START, LIST_IS_SUCCESS} from '../actions/list';

const initialState = {
    data: [],
    payload: false,
    error: ''
};

const listReducer = (state = initialState, action) => {
    switch (action.type){
        case LIST_IS_START:
            return {...state, payload: action.payload};
        case LIST_IS_SUCCESS:
            return {...state, data: action.data, payload: action.payload};
        case LIST_IS_ERROR:
            return {...state, error: action.error, payload: action.payload};
    }
    return state;
};

export default listReducer;