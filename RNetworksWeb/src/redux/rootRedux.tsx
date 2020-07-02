import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "../App";
import configureStore, { history } from "./configureStore";
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom';

const { persistor, store } = configureStore();

function ReduxRoot() {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<PersistGate
					persistor={persistor}
				>
					<Route path="/" component={App} />
				</PersistGate>
			</ConnectedRouter>
		</Provider>
	);
}

export { store };

export default ReduxRoot;
