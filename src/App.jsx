import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import SiderNav from './component/sidenav/SiderNav';
import { useState, useEffect } from 'react';
import { routes } from './utils/routes';
import Cookies from 'js-cookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  useEffect(() => {
    const access_token = Cookies.get('a_token');
    const refesh_token = Cookies.get('r_token');
    if (access_token || refesh_token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      {isAuthenticated && (
        <SiderNav
          setIsAuthenticated={setIsAuthenticated}
          isSidebarActive={isSidebarActive}
          setIsSidebarActive={setIsSidebarActive}
        />
      )}
      <div
        className="content"
        style={{
          width: isSidebarActive ? 'calc(100% - 92px)' : 'calc(100% - 250px)',
          marginLeft: isSidebarActive ? '92px' : '250px',
        }}
      >
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
    </BrowserRouter>
  );
}

export default App;
