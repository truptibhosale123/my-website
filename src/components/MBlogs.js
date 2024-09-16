import React from "react";
import { Link } from "react-router-dom";
import './Blogs.css';
import Header from "./Header";

export default function MBlogs(){
    const blogs = [
        { id: 1, title: "First Blog", summary: "This is a short summary of the first blog" },
        { id: 2, title: "Second Blog", summary: "This is a short summary of the second blog" },
      ];
        
        return (
            
            <div className="grid-container">
                <Header/>
              {blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card">
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                </Link>
              ))}
            </div>
          );
 
}
