import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const BlogCard = ({ title, description, image, date }) => {
  return (
    <Card sx={{ maxWidth: 690, marginBottom: '20px'}}> {/* Ajuste al doble de ancho */}
      <CardActionArea>
        <CardMedia
          component="img"
          height="280" // Ajuste al doble de altura
          image={image}
          alt={title}
        />
        <CardContent sx={{ backgroundColor: 'var(--background-color-card)' }}>
          <Typography gutterBottom variant="h5"  component="div" sx={{ color: 'var(--text-color)' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--text-color)' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: 'var(--background-color-card)' }}>
        <Button size="small" sx={{color:'var(--text-color)'}}>
          Share
        </Button>
        <Typography variant="caption" sx={{ marginLeft: 'auto', color: 'var(--text-color)' }}>
          {date}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default BlogCard;

