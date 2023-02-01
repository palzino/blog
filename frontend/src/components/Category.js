import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";


const Category = () => {
    const { id } = useParams();

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1)
        return '';
    };

    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');

    useEffect(() => {
        
        setCurrentCategory(capitalizeFirstLetter(id));

        var data = JSON.stringify({
            "category": `${id}`
          });
          
          var config = {
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/api/blog/category`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

        const fetchData = async () => {
            try {
                
                const res = await axios(config)
                setBlogs(res.data);

            } catch {

            }
        }

        fetchData();

    }, [id] );

    const getCategoryBlogs = () => {
        let list = []
        let result = []

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

            );
        });
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
        <div className="container">
            
            <div className="nav-scroller py-1 bg-light">
                        <nav className="navbar d-flex bg-body-secondary">
                            <Link className="p-2 link-secondary" to="/blog">All</Link>
                            <Link className="p-2 link-secondary" to="/category/homelab">Homelab</Link>
                            <Link className="p-2 link-secondary" to="/category/science">Science</Link>
                            <Link className="p-2 link-secondary" to="/category/work">Work</Link>
                            <Link className="p-2 link-secondary" to="/category/projects">Projects</Link>
                            <Link className="p-2 link-secondary" to="/category/coding">Coding</Link>
                            <Link className="p-2 link-secondary" to="/category/blockchain">Blockchain</Link>
                            <Link className="p-2 link-secondary" to="/category/other">Other</Link>
                        </nav>
                </div>
                <h3 className="display-4 text-white">{currentCategory} category</h3>
                {getCategoryBlogs()}

    
        </div>
        )
};

export default Category;