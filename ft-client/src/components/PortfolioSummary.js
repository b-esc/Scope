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
import contentCard from './ContentCard';
import ContentCard from './ContentCard';

export default function PortfolioSum()
{
  const StyleClasses = useStyles();
  const fixedHeightPaper = clsx(StyleClasses.paper, StyleClasses.fixedHeight);
  const [tickerData, setTickerData] = useStore("mainPageTickerData");

  return (
    <Container maxWidth="lg" className={StyleClasses.container}>
      <Grid container direction="row" spacing={2}>
        {/* Personal Information */}
        <Grid item xs={3}>
          <ContentCard mediaMaxHeight={240} cardImg={"https://i.imgur.com/fUIsscE.jpg"} />
        </Grid>
        {/* Public Portfolio */}
        <Grid item xs={9} container direction="column">
          <Grid item>
            <Paper className = {StyleClasses.paper}>
              Public Portfolio
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
