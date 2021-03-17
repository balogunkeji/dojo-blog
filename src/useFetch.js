// making a custom hooks
import {useState, useEffect} from 'react'

const useFetch = (url) => {

 const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const abortCont = new AbortController();
    setTimeout(() =>{
      fetch(url, {signal: abortCont.signal})
    .then((res) => {
      if(!res.ok){
        throw Error('could not load data')
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false)
      setError(null)
    })
    .catch(err => {
      if(err.name==='AboutError'){
        console.log('Fetched Aborted')
      } else{
        setError(err.message)
      setLoading(false)
      }
    })
    }, 3000);

    return () => abortCont.abort();
  }, [url]);
    return{data,loading,error};
}
 
export default useFetch;