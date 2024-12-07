import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogs } from '../utils/BlogContext';
import Titulo from '../components/BlogDetail/BlogTitle';
import Parrafo from '../components/BlogDetail/BlogParraf';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = useBlogs();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog no encontrado</div>;
  }

  const parrafos = blog.description.split('\n');

  return (
    <div>
      <Titulo blog={blog} />

      {/* Mapeamos los párrafos en bloques de 2 y agregamos imágenes opcionales */}
      {parrafos.map((_, index) => {
        // Procesar bloques de 2 párrafos
        if (index % 3 === 0) {
          const paragraphSubset = parrafos.slice(index +3 , index + 6);
          const imageToShow = blog.image?.[Math.floor(index / 2) + 1] || null; // Obtener la imagen correspondiente (si existe)
          
          return (
            <Parrafo
              key={index}
              paragraphs={paragraphSubset} // Pasamos el bloque de 2 párrafos
              image={imageToShow} // Pasamos la imagen correspondiente
            />
          );
        }

        return null; // No renderizar nada para los índices no necesarios
      })}
    </div>
  );
};

export default BlogDetail;










