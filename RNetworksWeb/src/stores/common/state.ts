import { ILoginState } from "../auth/type";

export interface CommonState {
	code: string;
	success: boolean;
	errorMessage?: string;
	fallback?: boolean;
	fallbackMsg?: boolean;
}

export default interface IAppState {
	authState: ILoginState;
	settings:any;
	router: any


}
