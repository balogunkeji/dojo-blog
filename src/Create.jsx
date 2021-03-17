import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title,body,author };

        setisPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            setisPending(false)
            history.push('/')
        })
    }
    return ( 
        <div className = "create">
            <h2>A New Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title:</label>
                <input type ='text' 
                required 
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea required value={body}
                onChange = {(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author}
                onChange = {(e) => setAuthor(e.target.value)}>
                <option value='mario'>Mario</option>
                <option value='yushi'>Yushi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;