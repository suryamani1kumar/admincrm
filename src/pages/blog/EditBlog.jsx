import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils/axiosInstance';
import TextEditor from '../../component/textEditor/TextEditor';
import Loader from '../../component/loader/Loader';

const EditBlog = () => {
  const { url } = useParams();
  const [singleBlog, setSingleBlog] = useState({});
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/api/blog?pageurl=${url}`)
      .then((res) => {
        console.log('res', res);
        setSingleBlog(res.data.blog);
        setLoading(false);
      })
      .catch((err) => console.log('error', err));
  }, []);

  const updateBlog = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .put(`/api/updateBlog?pageurl=${url}`, singleBlog)
      .then((res) => {
        console.log('res', res);
        setLoading(false);
      })
      .catch((err) => console.log('error', err));
  };

  return laoding ? (
    <Loader />
  ) : (
    <TextEditor
      blogForm={singleBlog}
      setBlogFrom={setSingleBlog}
      sumbit={updateBlog}
    />
  );
};

export default EditBlog;
