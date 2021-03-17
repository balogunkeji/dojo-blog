import { useParams } from "react-router";

const BlogDetails = () => {

    const {id} = useParams();
    return ( 
     <div className='blog-preview'>
         <h2>Blog details - {id}</h2>
     </div>
     );
}
 
export default BlogDetails;