import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import TextEditor from './component/textEditor/TextEditor';
import SiderNav from './component/sidenav/SiderNav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<SiderNav />} />
          <Route path="/blog" element={<TextEditor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
