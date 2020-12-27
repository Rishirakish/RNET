import { LoginArgs, APP_LOGIN } from "./type";

export function login(args: LoginArgs) {
	return {
		type: APP_LOGIN,
		payload: args,
	};
}
