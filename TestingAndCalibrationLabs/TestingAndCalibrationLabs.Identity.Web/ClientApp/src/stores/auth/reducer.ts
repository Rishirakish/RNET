import { APP_LOGIN_SUCCESS, ILoginState, APP_LOGIN_FAILED, APP_LOGOUT, LoginActionResultType } from "./type";

const initialState: ILoginState = {
	code: '',
	access_token: '',
	loggedIn: false,
	attempts: 0,
    name:'',
    success:false,
    email:''
};

export function loginReducer(
	state = initialState,
	action: LoginActionResultType,
): ILoginState {
	switch (action.type) {
		case APP_LOGIN_SUCCESS:
			return {
				...state,
				//loggedIn: action.payload.success,
				...action.payload,
			};
		case APP_LOGIN_FAILED:
			return {
				...state,
				//loggedIn: false,
				//code: "APPLICATION_ENCOUNTERED_AN_ERROR",
				...action.payload,
			};
		case APP_LOGOUT:
			return {
				...state,
				...initialState,
			};
	
		default:
			return {...state, errorMessage: ''};
	}
}