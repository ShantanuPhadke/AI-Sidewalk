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
    position: 'relative',
    top: '5%',
  }
})

class App extends React.Component{
    staticDemocratData = [
      {
      "initials": "MB",
      "name": "Michael Bennet",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Michael_Bennet_Official_Photo.jpg/256px-Michael_Bennet_Official_Photo.jpg",
      "imageHeight": 150,
      "imageWidth": 150,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Michael_Bennet_Official_Photo.jpg",
      "linkSrcExtraInfo": "via Wikimedia Commons"
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

  staticRepublicanData = [
    {
      "initials": "DT",
      "name": "Donald Trump"
    },
    {
      "initials": "MS",
      "name": "Mark Sanford"
    },
    {
      "initials": "BW",
      "name": "Bill Weld"
    },
    {
      "initials": "JW",
      "name": "Joe Walsh"
    }
  ];



  render (){
    const { classes } = this.props;
    return (
      <div className="App">
        <div><h1> Political Sentiment Basic Frontend Template </h1></div>
        <div className={classes.politicalButtons}>
          <PoliticalButtons/>
        </div>
        <div class={classes.politicalCards}>
          {[0,1,2,3,4,5].map(outerValue => (
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>
                {[0, 1, 2].map(value => (
                  <Grid key={value} item>
                    <PoliticalCard initials={this.staticDemocratData[outerValue*3+value]["initials"]} 
                    name={this.staticDemocratData[outerValue*3+value]["name"]}
                    cardImageSrc={this.staticDemocratData[0]["imageSrc"]}
                    cardImageHeight={this.staticDemocratData[0]["imageHeight"]}
                    cardImageWidth={this.staticDemocratData[0]["imageWidth"]}
                    cardLinkSrc={this.staticDemocratData[0]["linkSrc"]}
                    cardLinkSrcExtraInfo={this.staticDemocratData[0]["linkSrcExtraInfo"]}
                    />
                  </Grid>
                ))}
                
              </Grid>
           </Grid>
          ))}

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
