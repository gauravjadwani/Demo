
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

const appReducer = combineReducers({
    Login: LoginReducer,
    Register:RegisterReducer

});
const rootReducer = (state, action) => {
    // if (action.type === VERIFY_AUTHENTICATION && !action.payload) {
    //     state = undefined;
    // }
    return appReducer(state, action);
};
export default rootReducer;
