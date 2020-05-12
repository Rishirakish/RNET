import { History } from "history";
import { combineReducers } from "redux";
import IAppState from "../stores/common/state";
import { loginReducer } from "../stores/auth/reducer";
import settingsReducer from "../stores/common/settingsReducer";

// export interface RootState {

// 	routerReducer: RouterState,
// }

export default (history: History) =>
  combineReducers<IAppState>({
    authState: loginReducer,
    settings: settingsReducer,
  });

// export default combineReducers<IAppState>({
//   authState: loginReducer,
// });
