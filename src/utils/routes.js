import AddBlog from '../pages/blog/addBlog';
import EditBlog from '../pages/blog/EditBlog';
import Dashboard from '../pages/dashboard';
import ForgetPassword from '../pages/ForgetPassword';
import Login from '../pages/Login';
import viewBlog from '../pages/blog/viewBlog';

export const protectedRoutes = [
  { path: '/dashboard', Component: Dashboard },
  { path: '/blog/addblog', Component: AddBlog },
  { path: '/blog/viewblog', Component: viewBlog },
  { path: '/blog/:url', Component: EditBlog },
];

export const publicRoutes = [
  { path: '/', Component: Login, needsProps: true },
  { path: '/forgotpassword', Component: ForgetPassword },
];
