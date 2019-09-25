import React from 'react';
import './App.scss';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import PoliticalButtons from './PoliticalButtons/PoliticalButtons';
import PoliticalCard from './PoliticalCard/PoliticalCard';


const styles = () => ({
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


class App extends React.Component{
  staticDemocratData = [{
    "initials": "MB",
    "name": "Michael Bennet"
  },{
    "initials": "JB",
    "name": "Joe Biden"
  }, {
    "initials": "CB",
    "name": "Cory Booker"
  },
  {
    "initials": "SB",
    "name": "Steve Bullock"
  },{
    "initials": "PB",
    "name": "Pete Buttigeig"
  }, {
    "initials": "JC",
    "name": "Julián Castro"
  },
  {
    "initials": "JD",
    "name": "John Delaney"
  },{
    "initials": "TG",
    "name": "Tulsi Gabbard"
  }, {
    "initials": "KH",
    "name": "Kamala Harris"
  },
  {
    "initials": "AK",
    "name": "Amy Klobuchar"
  },{
    "initials": "WM",
    "name": "Wayne Messam"
  }, {
    "initials": "BO",
    "name": "Beto O'Rourke"
  },
  {
    "initials": "TR",
    "name": "Tim Ryan"
  },{
    "initials": "BS",
    "name": "Bernie Sanders"
  }, {
    "initials": "JS",
    "name": "Joe Sestak"
  },{
    "initials": "TS",
    "name": "Tom Steyer"
  },
  {
    "initials": "EW",
    "name": "Elizabeth Warren"
  },{
    "initials": "MW",
    "name": "Marianne Williamson"
  }, {
    "initials": "AY",
    "name": "Andrew Yang"
  }

];

indexer = 0;

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
            <Grid container justify="center" spacing={3}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value+this.indexer]["initials"]} name={this.staticDemocratData[value+this.indexer]["name"]}/>
                </Grid>
              ))}
              
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[3, 4, 5].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} name={this.staticDemocratData[value]["name"]}/>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[6, 7, 8].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} name={this.staticDemocratData[value]["name"]}/>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[9, 10, 11].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} name={this.staticDemocratData[value]["name"]}/>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[12, 13, 14].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} name={this.staticDemocratData[value]["name"]}/>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[15, 16, 17].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} name={this.staticDemocratData[value]["name"]}/>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              {[18].map(value => (
                <Grid key={value} item>
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} name={this.staticDemocratData[value]["name"]}/>
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
