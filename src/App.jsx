import { useState } from 'react'
import './App.css'
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaLock, FaUser } from "react-icons/fa";

function App() {
 const [value, setValue] = useState("");

  return (
    <>
     {/* https://codepen.io/juniorthx3/pen/bGNxjEY */}
      <div className="loginconatiner">
        <div className="login">
          <div className="login_form-box ">
            <div className="login_header-form">
              <HiOutlineUserCircle />
            </div>
            <form className="login-form">
              <div className="login_input-group">
                <div className="login_input-group-prepend">
                  <span className="login_input-group-text">
                    <FaUser />
                  </span>
                </div>
                <input
                  type="text"
                  className="login_form-control"
                  placeholder="Username"
                />
              </div>
              <div className="login_input-group">
                <div className="login_input-group-prepend">
                  <span className="login_input-group-text">
                    <FaLock />
                  </span>
                </div>
                <input
                  type="text"
                  className="login_form-control"
                  placeholder="Password"
                />
              </div>
              <button type="button" className="btn btn-secondary btn-block">
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ReactQuill
        value={value}
        onChange={setValue}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
          "color", // Include color formatting
          "background", // Include background color formatting
        ]}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            [{ font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ color: [] }, { background: [] }], // Text and background color pickers
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"], // Remove formatting button
          ],
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: value,
        }}
      />
    </>
  )
}

export default App
