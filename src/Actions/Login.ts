import { Actions } from 'react-native-router-flux';
import { VERIFY_CLIENT, CLEAR_LOGIN_STATE,VERIFY_CLIENT_ERROR,VERIFY_CLIENT_SESSION, LoginActionTypes, LoginState } from '../constants/types';
import { Dispatch } from 'redux';
import { setStorage, getStorage ,createUserSession,getUserSession,deleteUserSessions} from './../utils';


export const verifyClient = (newLoginState: LoginState) => {
  return async (dispatch: Dispatch) => {
    //   const ref = database.ref();
    console.log('inside actions',newLoginState);
    let value = await (getStorage('users'));
    console.log('verifyClient',value);
    value=JSON.parse(value);

    if (value) {
      // console.log('verifyClientff',(Object.keys(value)).includes(newLoginState.email))
      if ((Object.keys(value)).indexOf(newLoginState.email) >= 0) {
        if (value[newLoginState.email] === newLoginState.password) {
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: "Login Successfull",
          });
          // console.log('verifyClient email',newLoginState.email)
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

    // dispatch({
    //     type: VERIFY_CLIENT,
    //     payload: newLoginState,
    //   });
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
    console.log('verifyClientSession state',state)
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
    const state=deleteUserSessions(key);
    console.log('deleteUserSession',state,key);
    if(state){
      console.log('calleled');
      Actions.login();
    }
  }
}