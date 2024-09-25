import { History } from "history";
import { combineReducers } from "redux";
import IAppState from "../stores/common/state";
import { loginReducer } from "../stores/auth/reducer";
import settingsReducer from "../stores/common/settingsReducer";
import { connectRouter } from 'connected-react-router'
import {testCategoryReducer} from "../stores/testsearch/reducer"

// export interface RootState {

// 	routerReducer: RouterState,
// }

export default (history: History) =>
  combineReducers<IAppState>({
    authState: loginReducer,
    settings: settingsReducer,
    router: connectRouter(history),
    testSearchState:testCategoryReducer,

  });

// export default combineReducers<IAppState>({
//   authState: loginReducer,
// });
