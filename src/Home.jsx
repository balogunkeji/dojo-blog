import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Loading from './Loading'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      fetch("http://localhost:8000/blogs")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setBlogs(data);
      setLoading(false)
    })
    }, 7000);
  }, []);

  return (
    <div className="home">
      {loading && <Loading/>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
