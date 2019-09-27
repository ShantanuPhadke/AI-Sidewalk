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

    imageHeight = 150;
    imageWidth = 150;

    staticDemocratData = [
      {
      "initials": "MB",
      "name": "Michael Bennet",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Michael_Bennet_Official_Photo.jpg/256px-Michael_Bennet_Official_Photo.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Michael_Bennet_Official_Photo.jpg",
      "linkSrcExtraInfo": "via Wikimedia Commons"
    },{
      "initials": "JB",
      "name": "Joe Biden",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/6/64/Biden_2013.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Biden_2013.jpg",
      "linkSrcExtraInfo": "David Lienemann [Public domain]"

    }, {
      "initials": "CB",
      "name": "Cory Booker",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Cory_Booker,_official_portrait,_114th_Congress.jpg",
      "linkSrcExtraInfo": "Senate of the United States [Public domain]"
    },
    {
      "initials": "SB",
      "name": "Steve Bullock",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Steve_Bullock_by_Gage_Skidmore.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Steve_Bullock_by_Gage_Skidmore.jpg",
      "linkSrcExtraInfo": "Gage Skidmore [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)]" 
    },{
      "initials": "PB",
      "name": "Pete Buttigeig",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Pete_Buttigieg_by_Gage_Skidmore.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Pete_Buttigieg_by_Gage_Skidmore.jpg",
      "linkSrcExtraInfo": "Gage Skidmore [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)]"
    }, {
      "initials": "JC",
      "name": "Julián Castro",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Juli%C3%A1n_Castro%27s_Official_HUD_Portrait.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Juli%C3%A1n_Castro%27s_Official_HUD_Portrait.jpg",
      "linkSrcExtraInfo": "United States Department of Housing and Urban Development [Public domain]"
    },
    {
      "initials": "JD",
      "name": "John Delaney",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/1/1d/John_Delaney_113th_Congress_official_photo.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:John_Delaney_113th_Congress_official_photo.jpg",
      "linkSrcExtraInfo": "United States Congress [Public domain]"
    },{
      "initials": "TG",
      "name": "Tulsi Gabbard",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Tulsi_Gabbard%2C_official_portrait%2C_113th_Congress.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Tulsi_Gabbard,_official_portrait,_113th_Congress.jpg",
      "linkSrcExtraInfo": "United States Congress [Public domain]"
    }, {
      "initials": "KH",
      "name": "Kamala Harris",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Senator_Harris_official_senate_portrait.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Senator_Harris_official_senate_portrait.jpg",
      "linkSrcExtraInfo": "United States Senate [Public domain]"
    },
    {
      "initials": "AK",
      "name": "Amy Klobuchar",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Amy_Klobuchar,_official_portrait,_113th_Congress.jpg",
      "linkSrcExtraInfo": "United States Senate [Public domain]"
    },{
      "initials": "WM",
      "name": "Wayne Messam",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/2/25/Wayne_Messam_by_Marc_Nozell_%28cropped%29.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Wayne_Messam_by_Marc_Nozell_(cropped).jpg",
      "linkSrcExtraInfo": "Marc Nozell [CC BY 2.0 (https://creativecommons.org/licenses/by/2.0)]"
    }, {
      "initials": "BO",
      "name": "Beto O'Rourke",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/4/49/Beto_O%27Rourke_April_2019.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Beto_O%27Rourke_April_2019.jpg",
      "linkSrcExtraInfo": "Gage Skidmore from Peoria, AZ, United States of America [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)]"
    },
    {
      "initials": "TR",
      "name": "Tim Ryan",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Rep._Tim_Ryan_Congressional_Head_Shot_2010.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Rep._Tim_Ryan_Congressional_Head_Shot_2010.jpg",
      "linkSrcExtraInfo": "U.S. House of Representatives [Public domain]"
    },{
      "initials": "BS",
      "name": "Bernie Sanders",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Bernie_Sanders.jpg",
      "linkSrcExtraInfo": "United States Congress [Public domain]"
    }, {
      "initials": "JS",
      "name": "Joe Sestak",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Congressman_Sestak_Official_Congressional_headshot.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Congressman_Sestak_Official_Congressional_headshot.jpg",
      "linkSrcExtraInfo": "US Congress [Public domain]"
    },{
      "initials": "TS",
      "name": "Tom Steyer",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/6/61/Tom_Steyer_by_Gage_Skidmore.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Tom_Steyer_by_Gage_Skidmore.jpg",
      "linkSrcExtraInfo": "Gage Skidmore [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)]"
    },
    {
      "initials": "EW",
      "name": "Elizabeth Warren",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Elizabeth_Warren%2C_official_portrait%2C_114th_Congress.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Elizabeth_Warren,_official_portrait,_114th_Congress.jpg",
      "linkSrcExtraInfo": "United States Senate [Public domain]"
    },{
      "initials": "MW",
      "name": "Marianne Williamson",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/8/83/Marianne_Williamson_Profile.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Marianne_Williamson_Profile.jpg",
      "linkSrcExtraInfo": "Supearnesh [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]"
    }, {
      "initials": "AY",
      "name": "Andrew Yang",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Andrew_Yang_by_Gage_Skidmore.jpg",
      "imageHeight": this.imageHeight,
      "imageWidth": this.imageWidth,
      "linkSrc": "https://commons.wikimedia.org/wiki/File:Andrew_Yang_by_Gage_Skidmore.jpg",
      "linkSrcExtraInfo": "Gage Skidmore [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)]"
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
                    cardImageSrc={this.staticDemocratData[outerValue*3+value]["imageSrc"]}
                    cardImageHeight={this.staticDemocratData[outerValue*3+value]["imageHeight"]}
                    cardImageWidth={this.staticDemocratData[outerValue*3+value]["imageWidth"]}
                    cardLinkSrc={this.staticDemocratData[outerValue*3+value]["linkSrc"]}
                    cardLinkSrcExtraInfo={this.staticDemocratData[outerValue*3+value]["linkSrcExtraInfo"]}
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
                  <PoliticalCard initials={this.staticDemocratData[value]["initials"]} 
                  name={this.staticDemocratData[value]["name"]}
                  cardImageSrc={this.staticDemocratData[value]["imageSrc"]}
                  cardImageHeight={this.staticDemocratData[value]["imageHeight"]}
                  cardImageWidth={this.staticDemocratData[value]["imageWidth"]}
                  cardLinkSrc={this.staticDemocratData[value]["linkSrc"]}
                  cardLinkSrcExtraInfo={this.staticDemocratData[value]["linkSrcExtraInfo"]}/>
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
