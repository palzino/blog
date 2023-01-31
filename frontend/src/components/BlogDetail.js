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
        <div id="form-internal-container" className="container-sm">
        <h1 className="diplay-2 text-white">{blog.title}</h1>
        <h2 className=" mt-3 text-white">Category: {capitalizeFirstLetter(blog.category)}</h2>
        <h4 className="text-white">{blog.day} {blog.month}</h4>
        </div><br></br>
        <div id="form-internal-container" className=" text-white">
        <div className="mt-5 mb-5 text-white" dangerouslySetInnerHTML={createBlog()} />
        <hr className="text-white"/>
        <p className="lead mb-5 text-white"><Link className="font-weight-bold" to="/blog"> Back to all posts</Link></p>
        </div>
    </div>
    );
};

export default BlogDetail;

