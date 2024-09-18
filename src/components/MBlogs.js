import React from "react";
import { Link } from "react-router-dom";
import './Blogs.css';
import Header from "./Header";

export default function MBlogs(){
    const blogs = [
        { id: 1, title: "Why climb a mountain?", summary: "Because it is there......" },
        { id: 2, title: "What is mountaineering?", summary: "Maybe....just climb a mountain? NO!" },
      ];
        
        return (
            
            <div className="grid-container">
                <Header>What would you like to read?</Header>
              {blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card">
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                </Link>
              ))}
            </div>
          );
 
}
