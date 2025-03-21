import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils/axiosInstance';
import TextEditor from '../../component/textEditor/TextEditor';

const EditBlog = () => {
  const { url } = useParams();
  const [singleBlog, setSingleBlog] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/api/blog?pageurl=${url}`)
      .then((res) => {
        console.log('res', res);
        setSingleBlog(res.data);
      })
      .catch((err) => console.log('error', err));
  }, []);
  const updateBlog = () => {};
  return (
    singleBlog && (
      <TextEditor
        blogForm={singleBlog?.blog}
        setBlogFrom={setSingleBlog}
        sumbit={updateBlog}
      />
    )
  );
};

export default EditBlog;
