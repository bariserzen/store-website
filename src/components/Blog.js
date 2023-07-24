import React from "react";
import './Blog.css';
import Blog1 from '../img/blog1.jpg';
import Blog2 from '../img/blog2.png';




const Blog = () => {
    return (

    <div className="blog-container">
            <h1>SNEAKS UP BLOG</h1>

        <div className="blog">

            <div className="blog-right">
            <div className="img-container">
                <img src={Blog1} alt="blog1" />
                </div>
            <div className="details"> 
                <p>Lebron James | BLOG</p>
                <button>BLOG</button>
                <button>READ STORY</button>
                </div>  
            </div>

            <div className="blog-left">
                <div className="img-container">
                <img src={Blog2} alt="blog2" />
                </div>
                <div className="details"> 
                <p>NBA Finals History | BLOG</p>
                <button>BLOG</button>
                <button>READ STORY</button>
                </div>  
            </div>

         </div>
    </div>

    );
};


export default Blog;