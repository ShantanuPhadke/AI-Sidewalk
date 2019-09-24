import React from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    democratButton: {
      margin: theme.spacing(1),
      backgroundColor: "#458071",
      color: '#8AFFE2',
    },
    republicanButton: {
      margin: theme.spacing(1),
      backgroundColor: "#8AFFE2",
      color: '#458071',
    },
    input: {
      display: 'none',
    },
  }),
);

export default function PoliticalButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" className={classes.democratButton}>
                Democrats
            </Button>
            <Button variant="contained" className={classes.republicanButton}>
                Republicans
            </Button>
        </div>
    );
}

