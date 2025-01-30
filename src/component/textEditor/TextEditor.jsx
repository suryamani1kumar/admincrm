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
  const [value, setValue] = useState('');
  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        formats={Editorformats}
        modules={Editormodules}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: value,
        }}
      />
      <input placeholder="meta title" />
      <input placeholder="meta keyword" />
      <input placeholder="meta description" />
      <input placeholder="Heading" />
      <input placeholder="pageUrl" />
      <input placeholder="Image" />
      <select name="category" id="category">
        <option value="travel">travel</option>
        <option value="food">food</option>
      </select>
      <select name="status" id="status">
        <option value="Active">Active</option>
        <option value="inActive">inActive</option>
      </select>
    </div>
  );
};

export default TextEditor;
