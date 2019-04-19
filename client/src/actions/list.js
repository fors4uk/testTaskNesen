import axios from "axios";
export const LIST_IS_START = 'LIST_IS_START';
export const LIST_IS_SUCCESS = 'LIST_IS_SUCCESS';
export const LIST_IS_ERROR = 'LIST_IS_ERROR';



export const fetchList = () => {

    return dispatch => {
        dispatch(fetchListStart());
        axios.get('http://localhost:3002/loadData')
            .then(data => dispatch(fetchListSuccess(data.data)))
            .catch(error => dispatch(fetchListError(error)))
    }
};
const fetchListStart = () => {
    console.log('start');
    return {
        type: LIST_IS_START,
        payload: true,
        error: ''
    }
};
const fetchListSuccess = (data) => {
    console.log('success', data);
    return {
        type: LIST_IS_SUCCESS,
        payload: false,
        data: data
    }
};
const fetchListError = (error) => {
    console.log('error',error );
    return {
        type: LIST_IS_ERROR,
        payload: false,
        error: error
    }
};