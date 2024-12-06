import React from 'react';
import BlogList from './BlogList';
import styles from './../styles/FeaturedPosts.module.css'; // CSS Modules para posts destacados

function FeaturedPosts() {
  return (
    <section className={styles.featuredPosts}>
      <h2>Posts Destacados</h2>
      <BlogList />
    </section>
  );
}

export default FeaturedPosts;
