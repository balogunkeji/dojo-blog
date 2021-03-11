import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Loading from './Loading'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() =>{
      fetch("http://localhost:8000/blogs")
    .then((res) => {
      if(!res.ok){
        throw Error('could not load data')
      }
      return res.json();
    })
    .then((data) => {
      setBlogs(data);
      setLoading(false)
      setError(null)
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
    })
    }, 7000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <Loading/>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
