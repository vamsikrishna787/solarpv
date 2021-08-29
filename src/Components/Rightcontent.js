import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 80,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return <>
   
   
   <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Trump is next president
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



    <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Trump is next president
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card className={classes.root} style={{margin:"2px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        
          <Typography variant="body2" color="textSecondary" component="p">
          Trump is next president
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



  </>;
}
