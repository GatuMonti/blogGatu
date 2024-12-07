import React from 'react';
import { useBlogs } from '../utils/BlogContext';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const BlogList = () => {
  const blogs = useBlogs();  

  return (
    <div className="blog-list">
      {blogs.map((blog) => (        
          <BlogCard key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
          />        
      ))}
    </div>
  );
};

export default BlogList;


