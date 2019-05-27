import {Actions} from 'react-native-router-flux';
import {REGISTER_CLIENT,RegisterActionTypes,RegisterState} from '../constants/types';
import { Dispatch } from 'redux';
import {setStorage,getStorage} from './../utils';


export const  registerClient = (newRegisterState:RegisterState) => {
    return async (dispatch:Dispatch) => {
    //   const ref = database.ref();
    const data={};
    let email=newRegisterState.email
    data[email]=newRegisterState.password;
    // data.password=;
    // const {email,password}=newRegisterState;
    const value= await getStorage('users');
    if(value === null){
        setStorage('users',{...data});
    }else{
        const newData={...value,...data};
        setStorage('users',newData);
    }
    console.log('inside register actions',newRegisterState,value);
    Actions.home();
    dispatch({
        type: REGISTER_CLIENT,
        payload: newRegisterState,
      });
    };
  };
  export const openLoginScreen = () => {
    return (dispatch:Dispatch) => {
    //   const ref = database.ref();
    // console.log('inside register actions',newRegisterState);
    Actions.login();
    // dispatch({
    //     type: REGISTER_CLIENT,
    //     payload: newRegisterState,
    //   });
    };
  };