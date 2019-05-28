import { Actions } from 'react-native-router-flux';
import { VERIFY_CLIENT, CLEAR_LOGIN_STATE,VERIFY_CLIENT_ERROR,VERIFY_CLIENT_SESSION,DELETE_USER_SESSION, LoginActionTypes, LoginState } from '../constants/types';
import { Dispatch } from 'redux';
import { setStorage, getStorage ,createUserSession,getUserSession,deleteUserSessions} from './../utils';


export const verifyClient = (newLoginState: LoginState) => {
  return async (dispatch: Dispatch) => {
    let value = await (getStorage('users'));
    value=JSON.parse(value);

    if (value) {
      if ((Object.keys(value)).indexOf(newLoginState.email) >= 0) {
        if (value[newLoginState.email] === newLoginState.password) {
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: "Login Successfull",
          });
          createUserSession(newLoginState.email);
          dispatch({
            type: VERIFY_CLIENT,
            payload: newLoginState,
          });
          Actions.home();
        } else {
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: "Incorrect password",
          });
        }
      } else {
        dispatch({
          type: VERIFY_CLIENT_ERROR,
          payload: "Incorrect Email",
        });
      }
    }
  };
};
export const cleartLoginState = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CLEAR_LOGIN_STATE,
      payload: false,
    });
  }
}
export const verifyClientError = (txtMsg: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: VERIFY_CLIENT_ERROR,
      payload: txtMsg,
    });
  }
}
export const verifyClientSession = () => {
  return async (dispatch: Dispatch) => {
    const state=await getUserSession();
    dispatch({
      type: VERIFY_CLIENT_SESSION,
      payload: state,
    });
  }
}
export const openRegisterScreen = () => {
  return (dispatch: Dispatch) => {
    Actions.register();
  }
}
export const openHomeScreen = () => {
  return (dispatch: Dispatch) => {
    Actions.home();
  }
}
export const deleteUserSession = (key:string) => {
  return async(dispatch: Dispatch) => {
    const state=await deleteUserSessions(key);
    if(state === true){
      dispatch({
        type: DELETE_USER_SESSION,
        payload: false,
      });
      Actions.login();
    }
  }
}