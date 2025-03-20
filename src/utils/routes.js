import AddBlog from "../pages/addBlog";
import Dashboard from "../pages/dashboard";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import viewBlog from "../pages/viewBlog";

export const protectedRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/addblog", Component: AddBlog },
  { path: "/viewblog", Component: viewBlog },
];

export const publicRoutes = [
  { path: "/", Component: Login, needsProps: true },
  { path: "/forgotpassword", Component: ForgetPassword },
];
