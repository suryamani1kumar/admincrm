import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import TextEditor from './component/textEditor/TextEditor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="editor" element={<TextEditor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
