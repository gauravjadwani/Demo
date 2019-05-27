import { Reducer } from 'redux';
import {REGISTER_CLIENT,RegisterActionTypes,RegisterState} from '../constants/types';

const initialState: RegisterState = {
    email:'',
    password:'',
    isRegistered:false
  }
const RegisterReducer: Reducer<RegisterState, RegisterActionTypes> = (
  state = initialState,
  action
) => {
  console.log('ac',action);
  switch (action.type) {
    case REGISTER_CLIENT: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }
    default:
      return state;
  }
};
export default RegisterReducer;

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