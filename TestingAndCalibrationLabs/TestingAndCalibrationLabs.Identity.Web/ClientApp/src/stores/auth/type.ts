import { CommonState } from "../common/state";
export const APP_LOGIN = 'APP.LOGIN';
export const APP_LOGIN_SUCCESS = 'APP.LOGIN.SUCCESS';
export const APP_LOGIN_FAILED = 'APP.LOGIN.FAILED';
export const APP_LOGOUT = 'APP.LOGOUT';

export interface LoginArgs {
	email: string;
	password: string;
}

export interface ILoginState extends CommonState {
	loggedIn: boolean;
	access_token: string;
	email: string;
	attempts?: number;
    name:string;
}

export interface LoginAction {
	type: typeof APP_LOGIN;
	payload: LoginArgs;
}

export interface LoginSuccessAction {
	type: typeof APP_LOGIN_SUCCESS;
	payload: ILoginState;
}

export interface LoginFailedAction {
	type: typeof APP_LOGIN_FAILED;
	payload: ILoginState;
}

export interface LogoutAction {
	type: typeof APP_LOGOUT;
	payload: ILoginState;
}

export type LoginActionResultType =
	| LoginFailedAction
	| LoginSuccessAction
    | LogoutAction;
    
export type LoginActionType = LoginAction;
