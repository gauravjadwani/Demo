
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const appReducer = combineReducers({
    Login: LoginReducer
});
const rootReducer = (state, action) => {
    // if (action.type === VERIFY_AUTHENTICATION && !action.payload) {
    //     state = undefined;
    // }
    return appReducer(state, action);
};
export default rootReducer;
