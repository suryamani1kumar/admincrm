import { useState } from 'react';
import TextEditor from '../../component/textEditor/TextEditor';
import { axiosInstance } from '../../utils/axiosInstance';

const AddBlog = () => {
  const [blogForm, setBlogFrom] = useState({
    content: '',
    metaTitle: '',
    metaDescription: '',
    metaKeyword: '',
    pageUrl: '',
    heading: '',
    category: '',
    active: '',
    faqs: [{ ques: '', ans: '' }],
    authorName: '',
    authorDescription: '',
  });
  const sumbitBlog = (e) => {
    e.preventDefault();
    axiosInstance
      .post('/api/addBlog', { ...blogForm, userid: '3123sas2@fsfs' })
      .then((res) => console.log(res))
      .catch((err) => console.log('error', err));
  };
  return (
    <TextEditor
      blogForm={blogForm}
      setBlogFrom={setBlogFrom}
      sumbit={sumbitBlog}
    />
  );
};

export default AddBlog;
