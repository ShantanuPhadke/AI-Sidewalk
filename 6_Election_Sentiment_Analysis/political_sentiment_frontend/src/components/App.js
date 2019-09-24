import React from 'react';
import './App.scss';
import withStyles from '@material-ui/styles/withStyles';

import PoliticalButtons from './PoliticalButtons/PoliticalButtons.tsx';
import PoliticalCard from './PoliticalCard/PoliticalCard.tsx';


const styles = theme => ({
  politicalButtons: {
    position: 'fixed',
    left: '50%',
    bottom: '20px',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto'
  }
})

class App extends React.Component {
  render (){
    const { classes } = this.props;
    return (
      <div className="App">
        <h1> Political Sentiment Dashboard Time! (Almost) </h1>
        <div class={classes.politicalCards}>
          <PoliticalCard/>
        </div>
        <div className={classes.politicalButtons}>
          <PoliticalButtons/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App);
