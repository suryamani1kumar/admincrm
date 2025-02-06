import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import TextEditor from "./component/textEditor/TextEditor";
import SiderNav from "./component/sidenav/SiderNav";
import { useState } from "react";
const routes = [{ path: "/blog", Component: TextEditor }];
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <div className={isAuthenticated ? "d-flex" : "d-block"}>
        {isAuthenticated && <SiderNav />}

        <Routes>
          {!isAuthenticated && (
            <Route
              path={"/"}
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
