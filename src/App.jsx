import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import SiderNav from './component/sidenav/SiderNav';
import { useState, useEffect } from 'react';
import { routes } from './utils/routes';
import Cookies from 'js-cookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const access_token = Cookies.get('a_token');
    const refesh_token = Cookies.get('r_token');
    if (access_token || refesh_token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);
  console.log(isAuthenticated);
  return (
    <BrowserRouter>
      <div className={isAuthenticated ? 'd-flex' : 'd-block'}>
        {isAuthenticated && (
          <SiderNav setIsAuthenticated={setIsAuthenticated} />
        )}
        <div className="w-100">
          <Routes>
            {!isAuthenticated && (
              <Route
                path={'/'}
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
            )}
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  isAuthenticated ? <Component /> : <Navigate to="/" replace />
                }
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
