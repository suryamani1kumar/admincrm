import { useState } from 'react'
import './App.css'
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function App() {
 const [value, setValue] = useState("");

  return (
    <>
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
