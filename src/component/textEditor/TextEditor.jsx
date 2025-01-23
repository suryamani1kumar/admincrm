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
    </div>
  );
};

export default TextEditor;
