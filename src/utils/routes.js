import Login from '../component/login/Login';
import AddBlog from '../pages/addBlog';
import Dashboard from '../pages/dashboard';
import ForgetPassword from '../pages/ForgetPassword';

export const protectedRoutes = [
  { path: '/dashboard', Component: Dashboard },
  { path: '/addblog', Component: AddBlog },
];

export const publicRoutes = [
  { path: '/', Component: Login, needsProps: true },
  { path: '/forgotpassword', Component: ForgetPassword },
];
