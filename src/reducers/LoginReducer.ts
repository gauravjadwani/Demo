import { Reducer } from 'redux';
// import {
//     VERIFY_CLIENT,
// } from '../actions/CharacterActions';

import {VERIFY_CLIENT,VERIFY_CLIENT_ERROR,LoginActionTypes,LoginState} from '../constants/types';

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
  console.log('ac',action);
  switch (action.type) {
    case VERIFY_CLIENT: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    case VERIFY_CLIENT_ERROR: {
      return {
        ...state,
        error:action.payload
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