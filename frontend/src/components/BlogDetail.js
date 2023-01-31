import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        
        const fetchData = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                setBlog(res.data);
            } catch(err){
                
            }
        };
        fetchData();
    }, [id]);

    const createBlog = () => {
        return {__html: blog.content}
    };
    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1)
        return '';
    };


    return (
    <div className="container mt-3">
        <h1 className="diplay-2">{blog.title}</h1>
        <h2 className="text-muted mt-3">Category: {capitalizeFirstLetter(blog.category)}</h2>
        <h4>{blog.day} {blog.month}</h4>
        <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
        <hr />
        <p className="lead mb-5"><Link className="font-weight-bold" to="/blog"> Back to old blogs</Link></p>
    </div>
    );
};

export default BlogDetail;

