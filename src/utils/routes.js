import AddBlog from '../pages/addBlog';
import Dashboard from '../pages/dashboard';
import ForgetPassword from '../pages/ForgetPassword';
import Login from '../pages/Login';

export const protectedRoutes = [
  { path: '/dashboard', Component: Dashboard },
  { path: '/addblog', Component: AddBlog },
];

export const publicRoutes = [
  { path: '/', Component: Login, needsProps: true },
  { path: '/forgotpassword', Component: ForgetPassword },
];
