import Cart from "../pages/Cart";
import Display from "../pages/Display";
import Form from "../pages/Form";
import Home from "../pages/Home";
import List from "../pages/List";
import Login from "../pages/Login";

const RoutesWeb = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/list", component: List },
  { path: "/form", component: Form },
  { path: "/display", component: Display },
  { path: "/login", component: Login },
];

export { RoutesWeb };
