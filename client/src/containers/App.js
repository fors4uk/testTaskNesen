import {fetchList} from "../actions/list";
import {connect} from "react-redux";
import App from "../components/App";
import {onDrop} from '../actions/file'

const mapStateToProps = (state) => {
    return {
        data: state.list.data,
        payload: state.list.payload,
        error: state.list.error
    }
};
const mapDispatchToProps = dispatch => {
    return {
        /*loadList: (newList) => dispatch({
            type: ACTION_CHANGE_LIST,
            payload: newList}),*/
        fetchList: () => dispatch(fetchList()),
        onDrop: (acceptedFiles) => dispatch(onDrop(acceptedFiles))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);