import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Loading from './Loading'
import useFetch from './useFetch'

const Home = () => {
  const {data:blogs, loading, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <Loading/>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
