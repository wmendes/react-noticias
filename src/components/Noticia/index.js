import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Bookmark from '@material-ui/icons/Bookmark'
import ShareIcon from '@material-ui/icons/Share'
import Close from '@material-ui/icons/Close'

export default function Noticia ({ item, key}) {
  
  const classes = useStyles();
  

  /* TODO
    Mudar estilo do card no hover pra mostrar que é link
    Infinite scroll
  */
  function routeTo() {
    window.open(item.url)
  }
  
  /* TODO como mandar a noticia no outro componente??? */
  /* function removeCard() {
    noticias.pop(item)
  } */

  return (
    <Card className={classes.card} onClick={() => routeTo()}>
      <CardHeader
      action={
        <IconButton
         /* onClick={removeCard} */
         value={item}
        >
          <Close />
        </IconButton>
        }
        title={item.title}
        subheader={item.publishedAt}
      />
      <CardMedia
        className={classes.media}
        image={item.urlToImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to read later">
          <Bookmark />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: '0 auto',
    marginTop: '3%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));