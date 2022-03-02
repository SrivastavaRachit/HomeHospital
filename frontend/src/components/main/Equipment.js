
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Equipment() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        
        image="https://img.freepik.com/free-photo/hospital-room-with-bed-table_43614-220.jpg?size=626&ext=jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hospital Bed
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bed
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Price:100000</Button>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
    
  );
}