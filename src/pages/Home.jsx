import React from 'react';
import FeaturedPosts from '../components/FeaturedPosts'; // Componente para los posts destacados
import styles from './../styles/Home.module.css'; // CSS Modules

function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.mainContent}>        
          <FeaturedPosts />        
      </main>
    </div>
  );
}

export default Home;

