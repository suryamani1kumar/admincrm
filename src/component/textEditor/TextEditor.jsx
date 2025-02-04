import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const Editorformats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'color',
  'background',
];

const Editormodules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const TextEditor = () => {
 const [blogForm, setBlogFrom] = useState({
    content: "",
    metaTitle: "",
    metaDescription: "",
    metaKeyword: "",
    pageUrl: "",
    heading: "",
    category: "",
    status: "",
  });
  const handleblogForm = (e) => {
    const { value, name } = e.target;
    setBlogFrom({ ...blogForm, [name]: value });
  };
  return (
    <div>
      <ReactQuill
        value={blogForm.content}
        onChange={(value) => setBlogFrom({ ...blogForm, content: value })}
        formats={Editorformats}
        modules={Editormodules}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: value,
        }}
      />
      <input
        placeholder="meta title"
        name="metaTitle"
        type="text"
        value={blogForm.metaTitle}
        onChange={handleblogForm}
      />
      <input
        placeholder="meta keyword"
        name="metaKeyword"
        type="text"
        value={blogForm.metaKeyword}
        onChange={handleblogForm}
      />
      <input
        placeholder="meta description"
        name="metaDescription"
        type="text"
        value={blogForm.metaDescription}
        onChange={handleblogForm}
      />
      <input
        placeholder="Heading"
        name="heading"
        type="text"
        value={blogForm.heading}
        onChange={handleblogForm}
      />
      <input
        placeholder="pageUrl"
        name="pageUrl"
        type="text"
        value={blogForm.pageUrl}
        onChange={handleblogForm}
      />
      <input placeholder="Image" />
      <select name="category" id="category" onChange={handleblogForm}>
        <option value="travel">travel</option>
        <option value="food">food</option>
      </select>
      <select name="status" id="status" onChange={handleblogForm}>
        <option value="Active">Active</option>
        <option value="inActive">inActive</option>
      </select>
    </div>
  );
};

export default TextEditor;
