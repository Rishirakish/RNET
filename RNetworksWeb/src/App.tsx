import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router } from "react-router-dom";
import { history } from "./redux/configureStore";
import IAppState from "./stores/common/state";
import LabSearch from "./containers/lab_search";


function Routes() {
  return (
    <div>
      {/* <Route exact={true} path="/" component={Login} /> */}
    
      <Route path='/' component={LabSearch}/>
    </div>
  );
}

interface Props extends RouteComponentProps<void> {}

function App(props?: Props) {
  if (!props) {
    return null;
  }

  return (
    <Router history={history}>
      <div >
        <div>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

function mapStateToProps(state: IAppState) {
	return {
	};
}

export default connect(mapStateToProps)(App);
