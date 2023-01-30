import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import Homelab from "./components/Homelab";
import Showcase from "./components/Showcase";
import Cv from "./components/Cv";
const App = () => (

    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/homelab' element={<Homelab/>} />
                <Route path='/showcase' element={<Showcase/>} />
                <Route path='/cv' element={<Cv/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/blog/:id' component={BlogDetail} />
                <Route path='/category/:id' element={<Category />} />
            </Routes>
        </Layout>
    </Router>

);

export default App;