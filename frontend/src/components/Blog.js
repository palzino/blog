import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import '../form.css'
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`);
                    setFeaturedBlog(res.data[0]);
            } catch (err) {

            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
                    setBlogs(res.data);
            } catch (err) {

            }
        }
        fetchData();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1)
        return '';
    };

    const getBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
            <div className=" m-4 col-md-6">
                <div id="form-internal-container" className="row g-0 text-white rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">{capitalizeFirstLetter(blogPost.category)}</strong>
                    <h3 className="mb-0">{blogPost.title}</h3>
                    <div className="mb-1">{blogPost.month}</div>
                    <p className="mb-auto">{blogPost.excerpt}</p>
                    <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img width="250" height="250" src={blogPost.thumbnail} alt="thumbnail" />
                    </div>
                </div>
            </div>
            )
        })
            for (let i = 0; i < list.length; i+=2){
                result.push(
                    <div key={i} className = 'row mb-2'>
                        <div className="col-md-6">
                            {list[i]}
                        </div>
                        <div className="col-md-6">
                            {list[i+1] ? list[i+1] : null}
                        </div>
                    </div>
                )
            }
        return result;
    };

    return (
        <div className="overflow-hidden">
            
                <div className="nav-scroller py-1 bg-light">
                    <nav className="navbar d-flex bg-body-secondary">
                        <Link className="p-2 link-secondary" to="/category/homelab">Homelab</Link>
                        <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                        <Link className="p-2 link-secondary" to="/category/work">Work</Link>
                        <Link className="p-2 link-secondary" to="/category/projects">Projects</Link>
                        <Link className="p-2 link-secondary" to="/category/coding">Coding</Link>
                        <Link className="p-2 link-secondary" to="/category/blockchain">Blockchain</Link>
                        <Link className="p-2 link-secondary" to="/category/other">Other</Link>
                    </nav>
            </div><br></br>
            <div className="mt-2 text-center">
            <div className=" mt-5 m-4 p-4 p-md-5 mb-4 rounded text-bg-dark">
                <div className="px-0 mt-2">
                <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                <p className="lead my-3">{featuredBlog.excerpt}</p>
                <p className="lead mb-0">
                    <Link to={`/blog/${featuredBlog.slug}`} className="text-white fw-bold">Continue reading...</Link>
                </p>
                </div>
            </div>
            </div>
            
            {getBlogs()}
        
        </div>

       
        
    );

};
   
export default Blog;