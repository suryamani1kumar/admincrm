import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

const viewBlog = () => {
  const [allBlog, setAllBlog] = useState(null);
  useEffect(() => {
    axiosInstance
      .get(`/api/allBlog?page=1&limit=4`)
      .then((res) => {
        console.log(res);
        setAllBlog(res.data)
      })
      .catch((err) => console.log("error", err));
  }, []);
  return <div>viewBlog</div>;
};

export default viewBlog;
