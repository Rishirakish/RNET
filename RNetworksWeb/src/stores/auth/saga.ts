import { all, takeLatest, call, put } from "redux-saga/effects";
import { APP_LOGIN, APP_LOGIN_SUCCESS, APP_LOGIN_FAILED, LoginActionType } from "./type";
import { AuthService } from "../api/authservice";

function* login(action: LoginActionType) {
	try {
		//yield put({type: SHOW_PROGRESS_BAR});
		const payload = yield call(AuthService.login, {...action.payload});
		console.log('paylod = ' + JSON.stringify(payload));
		yield put({type: APP_LOGIN_SUCCESS, payload});
	} catch (error) {
		yield put({type: APP_LOGIN_FAILED, error});
	}
	//yield put({type: HIDE_PROGRESS_BAR});
}


export function* authWatcher() {
	yield all([
		takeLatest(APP_LOGIN, login),
	]);
}
