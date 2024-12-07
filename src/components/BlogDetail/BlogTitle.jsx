import React from 'react';
import styles from '../../styles/BlogDetail/BlogTitle.module.css';

const BlogTitle = ({ blog }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={blog.image[0]}
          alt={blog.title}
        />
      </div>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.date}><strong>Fecha: </strong>{blog.date}</p>

        {/* Renderizar los primeros 3 párrafos uno debajo del otro */}
        {blog.description.split('\n').slice(0, 3).map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogTitle;
