import React from "react";
import { Link } from "react-router-dom";

const blogs = [
    { id: 1, title: "First Blog", summary: "This is a short summary of the first blog" },
    { id: 2, title: "Second Blog", summary: "This is a short summary of the second blog" },
  ];

const BlogList = () => {

    return (
        <div style={styles.gridContainer}>
          {blogs.map(blog => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} style={styles.blogCard}>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
            </Link>
          ))}
        </div>
      );
};

const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      padding: '20px',
    },
    blogCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textDecoration: 'none',
      color: 'black',
      transition: 'transform 0.2s ease-in-out',
    },
    blogCardHover: {
      transform: 'scale(1.05)',
    },
  };
  
  export default BlogList;

