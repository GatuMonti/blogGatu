import Racet, {createContext, useContext} from 'react';

// Crear el contexto
const BlogContext = createContext();

//Proveedor del contextet

export const BlogProvider = ({ children }) => {
    const blogs = [
        {
            id: 1,
            title: "¿Qué son las redes sociales y cuáles son las más importantes?",
            description: `1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magnam accusantium officia placeat, libero quos fuga est non quod et? Ipsum atque dolorum, ducimus, at iste quidem illum eum illo quos, eaque consequuntur autem nisi?.
            2 - Scipit voluptate quisquam minima expedita ratione. Ab minus, molestiae id, explicabo adipisci natus exercitationem officia cupiditate debitis ullam ratione veritatis ipsam aut sapiente earum rem commodi labore, rerum velit numquam libero voluptas enim?.
            3 - Omnis maiores id ipsa eos officiis libero corporis, nobis animi praesentium ipsum impedit ex officia harum, expedita minus neque consequatur quo! Vel sapiente adipisci libero hic minus inventore sunt blanditiis eligendi ut eius ea dolores a pariatur vitae magni asperiores, ipsum sequi amet voluptate iste quis illum fugit?.
            4 - Soluta voluptatem officiis autem quos consectetur tenetur impedit, iusto nisi distinctio enim recusandae aliquam modi? Odio quo a qui consequuntur accusamus accusantium nisi aut tempora possimus molestias illum, ipsa animi sed, perferendis inventore, dolores temporibus est optio hic vero quia rem.
            5 - Nemo consequuntur a, perspiciatis magnam dolores est! Excepturi quis nam optio dicta voluptas? Dolore officia eius quidem inventore neque cum voluptas dicta nisi, earum impedit nesciunt cupiditate dolor, provident ab.
            6 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum magnam accusantium officia placeat, libero quos fuga est non quod et? Ipsum atque dolorum, ducimus, at iste quidem illum eum illo quos, eaque consequuntur autem nisi?.
            7 - Scipit voluptate quisquam minima expedita ratione. Ab minus, molestiae id, explicabo adipisci natus exercitationem officia cupiditate debitis ullam ratione veritatis ipsam aut sapiente earum rem commodi labore, rerum velit numquam libero voluptas enim?.
            8 - Omnis maiores id ipsa eos officiis libero corporis, nobis animi praesentium ipsum impedit ex officia harum, expedita minus neque consequatur quo! Vel sapiente adipisci libero hic minus inventore sunt blanditiis eligendi ut eius ea dolores a pariatur vitae magni asperiores, ipsum sequi amet voluptate iste quis illum fugit?.
            9 - Soluta voluptatem officiis autem quos consectetur tenetur impedit, iusto nisi distinctio enim recusandae aliquam modi? Odio quo a qui consequuntur accusamus accusantium nisi aut tempora possimus molestias illum, ipsa animi sed, perferendis inventore, dolores temporibus est optio hic vero quia rem.
            10 - Nemo consequuntur a, perspiciatis magnam dolores est! Excepturi quis nam optio dicta voluptas? Dolore officia eius quidem inventore neque cum voluptas dicta nisi, earum impedit nesciunt cupiditate dolor, provident ab.`,
            image: ["https://resources.esmartia.com/hubfs/Imagenes-redes-sociales-blog-post.jpg","https://media.istockphoto.com/id/1413735503/es/foto/redes-sociales-social-medios-marketing-tailandia-redes-sociales-compromiso-post-estructura.jpg?s=1024x1024&w=is&k=20&c=KenA_63Odltn9Gs5vf1kI_FDiomv3VSUuZqcw6JL4yI=","https://assets.youscan.io/cdn-cgi/image/metadata=copyright,format=auto,fit=contain,quality=0,width=1280/assets/main/Tipos-de-redes-sociales-y-marketing.png"],
            tags: ["Redes Sociales", "Social Ads"],
            date: "6 diciembre 2024"
          }
          ,
      {
        id: 2,
        title: "Estrategias efectivas para marketing digital en 2024",
        description: "En este artículo exploramos las estrategias más efectivas para el marketing digital en 2024...",
        image: ["https://www.digixem360.com/wp-content/uploads/2024/05/Marketing-Digital-1024x576.jpg.webp"],
        tags: ["Marketing Digital", "Estrategias"],
        date: "5 diciembre 2024"
      },
      {
        id: 3,
        title: "La importancia de las redes sociales en los negocios",
        description: "Las redes sociales se han convertido en una herramienta esencial para el éxito de los negocios...",
        image: ["https://digesit.com/wp-content/uploads/2021/08/como-vender-tu-negocio-en-las-redes-sociales.jpg"],
        tags: ["Redes Sociales", "Negocios"],
        date: "4 diciembre 2024"
      },
      {
        id: 4,
        title: "Cómo aumentar tus ventas con publicidad en redes sociales",
        description: "Te contamos cómo las campañas publicitarias en redes sociales pueden impulsar tus ventas...",
        image: ["https://onzamarketing.com/wp-content/uploads/2024/04/image-6.webp"],
        tags: ["Publicidad", "Ventas"],
        date: "3 diciembre 2024"
      }
    ];
  
    return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>;
  };

  export const useBlogs = () => {
    return useContext(BlogContext);
  };

