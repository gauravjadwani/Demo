import {Actions} from 'react-native-router-flux';
import {VERIFY_CLIENT,VERIFY_CLIENT_ERROR,LoginActionTypes,LoginState} from '../constants/types';
import { Dispatch } from 'redux';
import {setStorage,getStorage} from './../utils';


export const verifyClient =  (newLoginState:LoginState) => {
    return async(dispatch:Dispatch) => {
    //   const ref = database.ref();
    console.log('inside actions');
    const value=await getStorage('users');
    if(value){
      if(newLoginState.email in Object.keys(value)){
        if(value[newLoginState.email] === newLoginState.password){
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: "Login Successfull",
          });
        }else{
          dispatch({
            type: VERIFY_CLIENT_ERROR,
            payload: "Incorrect password",
          });
        }
      }else{
        dispatch({
          type: VERIFY_CLIENT_ERROR,
          payload: "Incorrect Email",
        });
      }
    }
    Actions.home();
    dispatch({
        type: VERIFY_CLIENT,
        payload: newLoginState,
      });
    };
  };

  export const verifyClientError =  (txtMsg:string) => {
    return (dispatch:Dispatch) => {
      dispatch({
        type: VERIFY_CLIENT_ERROR,
        payload: txtMsg,
      });
    }
  }