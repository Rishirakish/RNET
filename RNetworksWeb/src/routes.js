//import Dashboard from "views/Dashboard.jsx";
import LabSearch from "./containers/lab_search/index"
import SignIn from "./components/signin";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    layout: "/admin"
  },
  {
    path: "/lab",
    name: "Lab Search",
    icon: "design_image",
    component: LabSearch,
    layout: "/dashboard"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: SignIn,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];
export default dashRoutes;
