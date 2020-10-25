// @flow
import React from 'react';
import clsx from 'clsx';
import { useStyles } from '../Styles';
import { useStore } from 'react-context-hook';

import {
  Container, CssBaseline, Grid, Paper, Card,
  CardActionArea, CardActions, CardMedia, CardContent,
  Typography, Button
  } from '@material-ui/core';

import NavBar from './Navbar';
import TestGraph from './TestGraph';
import Summary from './Summary';
import queryTopSum from '../utils/queryTopSum';
import ContentCard from './ContentCard.js';
import bcImg from '../static/images/blockchain.jpg';
import lou from '../static/images/lou.jpg';
import dna_large from '../static/images/dna_large.jpg';
import {sampleStory1} from '../static/sampleContent';

export default function StoriesPage()
{
  const [tickerData, setTickerData] = useStore("mainPageTickerData");

  return (
    <Grid container align="center"
     justify="center"
     direction="column" spacing={4}>
      <Grid item>
        <ContentCard
          rootMaxWidth={800}
          mediaMaxHeight={400}
          cardImg={bcImg}
          content={sampleStory1}
        />
      </Grid>
      <Grid item>
      <ContentCard
        rootMaxWidth={800}
        mediaMaxHeight={400}
        cardImg={lou}
      />
      </Grid>
      <Grid item>
        <ContentCard
          rootMaxWidth={800}
          mediaMaxHeight={400}
          cardImg={dna_large}
          content={sampleStory1}
        />
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  )
}
