import { all, fork } from 'redux-saga/effects';
import { authWatcher } from '../stores/auth/saga';


// export default function* startForman() {
//   yield all([
//     authWatcher
//   ]);
// }

const rootSaga = function*() {
	yield all([
		fork(authWatcher),
	
	]);
};

export default rootSaga;