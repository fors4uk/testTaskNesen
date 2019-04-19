import axios from "axios";
export const DROP_IS_START = 'DROP_IS_START';
export const DROP_IS_SUCCESS = 'DROP_IS_SUCCESS';
export const DROP_IS_ERROR = 'DROP_IS_ERROR';


export const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    return dispatch => {
        console.log(acceptedFiles[0]);
        const data = new FormData();
        data.append('file', acceptedFiles[0]);
        dispatch(onDropStart());
        return axios.post('http://localhost:3002/upload', data)
            .then(data => dispatch(onDropSuccess(data)))
            .catch(error => dispatch(onDropError(error)));
    }

};
const onDropStart = () => {
    console.log('start');
    return {
        type: DROP_IS_START,
        payload: true,
        error: ''
    }
};
const onDropSuccess = (data) => {
    console.log('success', data);
    return {
        type: DROP_IS_SUCCESS,
        payload: false,
        list: data
    }
};
const onDropError = (error) => {
    console.log('error',error );
    return {
        type: DROP_IS_ERROR,
        payload: false,
        error: error
    }
};

export default onDrop;







