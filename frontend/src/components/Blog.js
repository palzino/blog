import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredblogs, setFeatured] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured`) 
            } catch (err) {

            }
        }
        fetchData();
    }, []);


};
   
export default Blog;