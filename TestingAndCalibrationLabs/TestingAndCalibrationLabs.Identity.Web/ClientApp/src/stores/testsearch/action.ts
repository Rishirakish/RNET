import { TestCategoryArgs, APP_ADD_TEST_CATEGORY } from "./type";

export function addCategory(args: TestCategoryArgs) {
	return {
		type: APP_ADD_TEST_CATEGORY,
		payload: args,
	};
}
