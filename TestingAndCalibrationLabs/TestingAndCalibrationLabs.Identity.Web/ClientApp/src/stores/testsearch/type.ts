import { CommonState } from "../common/state";
export const APP_ADD_TEST_CATEGORY = 'APP.ADD_TEST_CATEGORY';
export const APP_ADD_TEST_CATEGORY_SUCCESS = 'APP.ADD_TEST_CATEGORY.SUCCESS';
export const APP_ADD_TEST_CATEGORY_FAILED = 'APP.ADD_TEST_CATEGORY.FAILED';

export interface TestCategoryArgs {
	category: string;
}

export interface ITestCategoryState extends CommonState {
	category:String
}

export interface TestCategoryAction {
	type: typeof APP_ADD_TEST_CATEGORY;
	payload: TestCategoryArgs;
}

export interface TestCategorySuccessAction {
	type: typeof APP_ADD_TEST_CATEGORY_SUCCESS;
	payload: ITestCategoryState;
}

export interface TestCategoryFailedAction {
	type: typeof APP_ADD_TEST_CATEGORY_FAILED;
	payload: ITestCategoryState;
}


export type TestCategoryActionResultType =
	| TestCategoryFailedAction
	| TestCategorySuccessAction;
    
export type TestCategoryActionType = TestCategoryAction;
