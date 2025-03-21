import { useEffect, useState } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ViewBlog = () => {
  const [allBlog, setAllBlog] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/api/allBlog?page=1&limit=4`)
      .then((res) => {
        setAllBlog(res.data);
      })
      .catch((err) => console.log('error', err));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Heading</th>
            <th>Page Url</th>
            <th>category</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allBlog?.blog?.map((item, i) => (
            <tr key={i}>
              <td>{item.heading}</td>
              <td>{item.pageUrl}</td>
              <td>{item.category}</td>
              <td>{item.status ? 'true' : 'false'}</td>
              <td className="d-flex justify-content-around">
                <p>{item.status ? <FaEye /> : <IoEyeOff />}</p>
                <p>
                  <Link to={`/blog/${item.pageUrl}`}>
                    <FaEdit />
                  </Link>
                </p>
                <p>
                  {' '}
                  <FaTrash />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewBlog;
