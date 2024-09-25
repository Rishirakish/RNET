import { ILoginState } from "../auth/type";
import { ITestCategoryState } from "../testsearch/type";

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
	router: any;
	testSearchState:ITestCategoryState;


}
