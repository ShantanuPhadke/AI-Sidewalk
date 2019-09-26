import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import LazyImage from '../LazyImage/LazyImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      backgroundColor: '#1F8067',
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
    },
    avatar: {
      backgroundColor: red[500],
    },
    title: {
       color: '#8AFFE2',
       fontSize: '16px',
       fontWeight: 'bold',
    },
    subheader: {
        color: '#8AFFE2',
        fontSize: '14px',
        fontWeight: 'normal',
    },
    info: {
        color: 'white',
        fontSize: '11px',
        fontWeight: 'normal',
    },
    icon: {
        color: '#31CCA5',
    },
    link: {
        color: '#8AFFE2',
        fontSize: '14px',
        fontWeight: 'normal',
    }
  }),
);

interface PoliticalCardProp { 
  initials: React.ReactNode; 
  name: React.ReactNode; 

  // These are for passing off to the LazyImage
  // LazyImage Image-based parameters
  cardImageSrc: string;
  cardImageHeight: number;
  cardImageWidth: number;
  // LazyImage link-based parameters
  cardLinkSrc: string;
  cardLinkSrcExtraInfo: string;
  cardLinkStyleClass: string;
};

export default function PoliticalinsCard(props: PoliticalCardProp) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
            title: classes.title,
            subheader: classes.subheader,
        }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            { props.initials }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ props.name }
        subheader="September 14, 2016"
      />

      <LazyImage imageSrc={props.cardImageSrc} 
      height={props.cardImageHeight} 
      width={props.cardImageWidth} 
      linkSrc={props.cardLinkSrc}
      linkSrcExtraInfo={props.cardLinkSrcExtraInfo}
      linkStyleClass={useStyles().link} />

      <CardContent>
        <Typography className={classes.info} variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={classes.icon} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton className={classes.icon} aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}