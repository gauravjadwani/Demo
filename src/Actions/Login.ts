import {Actions} from 'react-native-router-flux';
import {VERIFY_CLIENT,LoginActionTypes,LoginState} from '../constants/types';
import { Dispatch } from 'redux';


export const verifyClient = (newLoginState:LoginState) => {
    return (dispatch:Dispatch) => {
    //   const ref = database.ref();
    console.log('inside actions');
    Actions.home();
    dispatch({
        type: VERIFY_CLIENT,
        payload: newLoginState,
      });
    };
  };