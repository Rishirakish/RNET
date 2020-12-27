/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { RefObject } from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
// core components
//  import DemoNavbar from "../components/Navbars/DemoNavbar";


import routes from "../../routes.js";
// import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// import Sidebar from "../components/Sidebar/Sidebar";
// import Footer from "../components/Footer/Footer";

var ps: PerfectScrollbar;
//var mainPanel: RefObject<any>

class Dashboard extends React.Component {
  state = {
    backgroundColor: "blue"
  };
  //mainPanel = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      //ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
     // ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  // componentDidUpdate(e) {
  //   if (e.history.action === "PUSH") {
  //     this.mainPanel.current.scrollTop = 0;
  //     document.scrollingElement.scrollTop = 0;
  //   }
  // }
  handleColorClick = (color: any) => {
    this.setState({ backgroundColor: color });
  };
  render() {

    console.log("ADMIN props = "+JSON.stringify(this.props))
    console.log("ADMIN routes = "+JSON.stringify(routes ))

    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={routes}
          backgroundColor={this.state.backgroundColor}
        />
        <div className="main-panel" >
          {/* <DemoNavbar {...this.props} /> */}
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
          </Switch>
          {/* <Footer fluid /> */}
        </div>
        {/* <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleColorClick={this.handleColorClick}
        /> */}

        
      </div>
    );
  }
}

export default Dashboard;
