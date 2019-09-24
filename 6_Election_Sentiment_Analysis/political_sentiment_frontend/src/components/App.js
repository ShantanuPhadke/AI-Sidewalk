import React from 'react';
import './App.scss';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import PoliticalButtons from './PoliticalButtons/PoliticalButtons.tsx';
import PoliticalCard from './PoliticalCard/PoliticalCard.tsx';


const styles = theme => ({
  politicalButtons: {
    position: 'relative',
    top: '1%',
    margin: '0 auto',
  },

  politicalCards: {
    //overflowY: 'scroll',
    position: 'relative',
    top: '5%',
  }

})

class App extends React.Component {
  render (){
    const { classes } = this.props;
    return (
      <div className="App">
        <div><h1> Political Sentiment Dashboard Time! (Almost) </h1></div>
        <div className={classes.politicalButtons}>
          <PoliticalButtons/>
        </div>
        <div class={classes.politicalCards}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <PoliticalCard/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
