import wretch from "wretch";
import { LoginArgs } from '../auth/type';

export class AuthService {
	static url: string = '';

	public static login(credentials: LoginArgs) {
		return wretch(`${AuthService.url}/api/login`)
			.post(credentials)
			.json(response => response);
	}
	

}
