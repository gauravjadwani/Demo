import { Actions } from 'react-native-router-flux';
import { VERIFY_CLIENT, VERIFY_CLIENT_ERROR, LoginActionTypes, LoginState } from '../constants/types';
import { Dispatch } from 'redux';
import { setStorage, getStorage } from './../utils';


export const verifyClient = (newLoginState: LoginState) => {
  return async (dispatch: Dispatch) => {
    //   const ref = database.ref();
    console.log('inside actions');
    const value = await getStorage('users');
    console.log('verifyClient',value);
    if (value) {
      // console.log('verifyClientff',(Object.keys(value)).includes(newLoginState.email))
      if ((Object.keys(value)).indexOf(newLoginState.email) >= 0) {
        if (value[newLoginState.email] === newLoginState.password) {
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: "Login Successfull",
          });
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

export const verifyClientError = (txtMsg: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: VERIFY_CLIENT_ERROR,
      payload: txtMsg,
    });
  }
}

export const openRegisterScreen = (txtMsg: string) => {
  return (dispatch: Dispatch) => {
    Actions.register();
    // dispatch({
    //   type: VERIFY_CLIENT_ERROR,
    //   payload: txtMsg,
    // });
  }
}