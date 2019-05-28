import { Reducer } from 'redux';
// import {
//     VERIFY_CLIENT,
// } from '../actions/CharacterActions';

import {VERIFY_CLIENT,CLEAR_LOGIN_STATE,VERIFY_CLIENT_ERROR,VERIFY_CLIENT_SESSION,DELETE_USER_SESSION,LoginActionTypes,LoginState} from '../constants/types';

// // Define the Character type
// export interface ICharacter {
//   email: string;
//   password: string;
//   isVerified: boolean;
// }

// // Define the Character State
// export interface ICharacterState {
//   readonly characters: ICharacter[];
// }

// Define the initial state
// const initialState: LoginState = {
//   login: [],
// };
const initialState: LoginState = {
    email:'',
    password:'',
    error:'',
    loggedIn:false
  }
const LoginReducer: Reducer<LoginState, LoginActionTypes> = (
  state = initialState,
  action
) => {
  console.log('action',action,state);
  switch (action.type) {
    case VERIFY_CLIENT: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case CLEAR_LOGIN_STATE: {
      return {
        ...state,
        error:false
      };
    }
    case VERIFY_CLIENT_ERROR: {
      return {
        ...state,
        error:action.payload
      };
    }
    case VERIFY_CLIENT_SESSION: {
      return {
        ...state,
        loggedIn:action.payload
      };
    }
    case DELETE_USER_SESSION: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};
export default LoginReducer;

// const initialCharacterState: ICharacterState = {
//     characters: [],
//   };
  
//   export const characterReducer: Reducer<ICharacterState, CharacterActions> = (
//     state = initialCharacterState,
//     action
//   ) => {
//     switch (action.type) {
//       case CharacterActionTypes.GET_ALL: {
//         return {
//           ...state,
//           characters: action.characters,
//         };
//       }
//       default:
//         return state;
//     }
//   };