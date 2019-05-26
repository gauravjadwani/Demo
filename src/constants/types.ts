export const VERIFY_CLIENT = 'verifyClient';
export interface LoginState {
    email:string,
    password:string,
    isAuthenticated:boolean,
    loggedIn:boolean
  }
//   export interface LoginState {
//     readonly login: Login;
//   }
  interface VerifyClient {
    type: typeof VERIFY_CLIENT;
    payload: LoginState;
  }

  export type LoginActionTypes = VerifyClient;