export const VERIFY_CLIENT = 'verifyClient';
export const VERIFY_CLIENT_ERROR = 'verifyClientError';
export const REGISTER_CLIENT = 'registerClient';
export const CLEAR_LOGIN_STATE = 'clearLoginState';
export const VERIFY_CLIENT_SESSION = 'verifyClientSession';
export const DELETE_USER_SESSION = 'deleteUserSession';
export interface LoginState {
    email:string,
    password:string,
    error:string,
    loggedIn:boolean
  }
  export interface RegisterState {
    email:string,
    password:string,
    isRegistered:boolean
  }
  interface VerifyClient {
    type: typeof VERIFY_CLIENT;
    payload: LoginState;
  }
  interface VerifyClientError {
    type: typeof VERIFY_CLIENT;
    payload: LoginState;
  }
  interface RegisterClient {
    type: typeof REGISTER_CLIENT;
    payload: RegisterState;
  }

  export type LoginActionTypes = VerifyClient | VerifyClientError;
  export type RegisterActionTypes = RegisterClient;