import { combineReducers} from 'redux';
import fileReducer from './file';
import listReducer from './list';

const rootReducer = combineReducers({
    file:fileReducer,
    list:listReducer,
});

export default rootReducer;