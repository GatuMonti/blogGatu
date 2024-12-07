import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const BlogCard = ({ id, title, description, image, date }) => {
  // Función para limitar a 100 palabras
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(' ')}...`
      : text;
  };

  return (
    <Card sx={{ maxWidth: 690, marginBottom: '20px' }}>
      <CardActionArea>
        <Link to={`/blog/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <CardMedia
            component="img"
            height="280"
            image={image[0]}
            alt={title}
          />
          <CardContent sx={{ backgroundColor: 'var(--background-color-card)' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'var(--text-color)' }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--text-color)' }}>
              {truncateDescription(description, 100)}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;



