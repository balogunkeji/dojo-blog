// import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import BlogList from "./BlogList";
import Loading from './Loading'
import useFetch from './useFetch'

const Home = () => {
  const history = useHistory();
  const {data:blogs, loading, error} = useFetch('http://localhost:8000/blogs')
  const handleClick = () => {

    fetch('http://localhost:8000/blogs', {
        method: 'DELETE',

    }).then(() => {
      history.push('/create')
  })
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <Loading/>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    <button className = '' onClick = {handleClick}>Delete</button>
    </div>
  );
};

export default Home;
