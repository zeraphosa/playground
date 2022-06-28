import Home from "./views/Home";
import Profile from "./views/Profile";
import About from "./views/About";
import Login from "./views/Login";

export const routes = [
  {
    path: "/",
    component: Home,
    auth: false,
  },
  {
    path: "/about",
    component: About,
    auth: false,
  },
  {
    path: "/profile",
    component: Profile,
    auth: true,
  },
  {
    path: "/login",
    component: Login,
    auth: false,
  },
];
