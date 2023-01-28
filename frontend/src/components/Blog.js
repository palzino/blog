import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';

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
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">{capitalizeFirstLetter(blogPost.category)}</strong>
                    <h3 className="mb-0">Post title</h3>
                    <div className="mb-1 text-muted">Nov 11</div>
                    <p class="mb-auto">{blogPost.excerpt}</p>
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
        <div>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex">
                    <Link className="p-2 link-secondary" to="/category/homelab">Homelab</Link>
                    <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                    <Link className="p-2 link-secondary" to="/category/work">Work</Link>
                    <Link className="p-2 link-secondary" to="/category/projects">Projects</Link>
                    <Link className="p-2 link-secondary" to="/category/coding">Coding</Link>
                    <Link className="p-2 link-secondary" to="/category/blockchain">BlockchaiLink</Link>
                    <Link className="p-2 link-secondary" to="/category/other">Other</Link>
                </nav>
            </div>
            <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
                <div className="col-md-6 px-0">
                <h1 clclassNameas="display-4 fst-italic">{featuredBlog.title}</h1>
                <p className="lead my-3">{featuredBlog.excerpt}</p>
                <p className="lead mb-0">
                    <Link to={`/blog/${featuredBlog.slug}`} className="text-white fw-bold">Continue reading...</Link>
                </p>
                </div>
            </div>
            
            {getBlogs()}
        
        </div>

       
        
    );

};
   
export default Blog;