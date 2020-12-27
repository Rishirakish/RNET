import { all, takeLatest, call, put } from "redux-saga/effects";
import { TestCategoryAction, APP_ADD_TEST_CATEGORY_SUCCESS, APP_ADD_TEST_CATEGORY_FAILED, APP_ADD_TEST_CATEGORY } from "./type";

function* addTestCategory(action: TestCategoryAction) {
	try {
		
		const payload = {
			category:action.payload.category
		}

		console.log("category = "+action.payload.category)
		console.log("category = "+JSON.stringify(payload))

		yield put({type: APP_ADD_TEST_CATEGORY_SUCCESS, payload});
	} catch (error) {
		yield put({type: APP_ADD_TEST_CATEGORY_FAILED, error});
	}
	//yield put({type: HIDE_PROGRESS_BAR});
}


export function* testCategoryWatcher() {
	yield all([
		takeLatest(APP_ADD_TEST_CATEGORY, addTestCategory),
	]);
}
