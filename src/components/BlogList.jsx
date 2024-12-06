import React from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const blogs = [
    {
      title: "¿Qué son las redes sociales y cuáles son las más importantes?",
      description: "Las Redes Sociales son plataformas digitales que permiten la interacción entre personas...",
      image: "https://resources.esmartia.com/hubfs/Imagenes-redes-sociales-blog-post.jpg", // Ejemplo de imagen
      tags: ["Redes Sociales", "Social Ads"],
      date: "6 diciembre 2024"
    },
    {
      title: "Estrategias efectivas para marketing digital en 2024",
      description: "En este artículo exploramos las estrategias más efectivas para el marketing digital en 2024...",
      image: "https://www.digixem360.com/wp-content/uploads/2024/05/Marketing-Digital-1024x576.jpg.webp", // Ejemplo de imagen
      tags: ["Marketing Digital", "Estrategias"],
      date: "5 diciembre 2024"
    },
    {
      title: "La importancia de las redes sociales en los negocios",
      description: "Las redes sociales se han convertido en una herramienta esencial para el éxito de los negocios...",
      image: "https://digesit.com/wp-content/uploads/2021/08/como-vender-tu-negocio-en-las-redes-sociales.jpg", // Ejemplo de imagen
      tags: ["Redes Sociales", "Negocios"],
      date: "4 diciembre 2024"
    },
    {
      title: "Cómo aumentar tus ventas con publicidad en redes sociales",
      description: "Te contamos cómo las campañas publicitarias en redes sociales pueden impulsar tus ventas...",
      image: "https://onzamarketing.com/wp-content/uploads/2024/04/image-6.webp", // Ejemplo de imagen
      tags: ["Publicidad", "Ventas"],
      date: "3 diciembre 2024"
    }
  ];

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          tags={blog.tags}
          date={blog.date}
        />
      ))}
    </div>
  );
};

export default BlogList;

