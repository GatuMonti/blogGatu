import React from 'react';
import styles from '../../styles/BlogDetail/BlogParraf.module.css';

const BlogParraf = ({ paragraphs = [], image }) => {
  return (
    <div className={styles.container}>
      {/* Mostrar la imagen si está disponible */}
      {image && (
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={`Imagen relacionada al blog, sección`}
            className={styles.image}
          />
        </div>
      )}

      {/* Mostrar los párrafos si están disponibles */}
      {paragraphs.length > 0 ? (
        paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogParraf;



