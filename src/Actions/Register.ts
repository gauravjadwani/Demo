import {Actions} from 'react-native-router-flux';
import {REGISTER_CLIENT,RegisterActionTypes,RegisterState} from '../constants/types';
import { Dispatch } from 'redux';
import {setStorage,getStorage} from './../utils';
import {AsyncStorage} from "react-native";


export const  registerClient = (newRegisterState:RegisterState) => {
    return async (dispatch:Dispatch) => {
    //   const ref = database.ref();
    const data={};
    let email=newRegisterState.email
    data[email]=newRegisterState.password;
    // AsyncStorage.clear();
    // return true;
    // data.password=;
    // const {email,password}=newRegisterState;
    let value= await getStorage('users');
    if(value === null){
        setStorage('users',JSON.stringify(data));
    }else{
        value=JSON.parse(value);
        const newData={...value,...data};
        setStorage('users',JSON.stringify(newData));
    }
    console.log('inside register actions',newRegisterState,value);
    Actions.protected();
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