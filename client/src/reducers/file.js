import {DROP_IS_ERROR, DROP_IS_START, DROP_IS_SUCCESS} from "../actions/file";


const initialState = {
    list: [],
    payload: false,
    error: ''
};

const fileReducer = (state = initialState, action) => {
    switch (action.type){
        case DROP_IS_START:
            return {...state, payload: action.payload};
        case DROP_IS_SUCCESS:
            return {...state, list: action.data, payload: action.payload};
        case DROP_IS_ERROR:
            return {...state, error: action.error, payload: action.payload};
    }
    return state;
};

export default fileReducer;