import { all, fork } from 'redux-saga/effects';
import { authWatcher } from '../stores/auth/saga';
import {testCategoryWatcher} from "../stores/testsearch/saga"


// export default function* startForman() {
//   yield all([
//     authWatcher
//   ]);
// }

const rootSaga = function*() {
	yield all([
		fork(authWatcher),
		fork(testCategoryWatcher)
	
	]);
};

export default rootSaga;