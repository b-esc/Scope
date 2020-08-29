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

export default function PortfolioSum()
{
  const StyleClasses = useStyles();
  const fixedHeightPaper = clsx(StyleClasses.paper, StyleClasses.fixedHeight);
  const [tickerData, setTickerData] = useStore("mainPageTickerData");

  return (
    <div className={StyleClasses.root}>
      <CssBaseline />
      <NavBar />
      <main className={StyleClasses.content}>
        <div className={StyleClasses.appBarSpacer} />
        <Container maxWidth="lg" className={StyleClasses.container}>
          <Grid container direction="row" spacing={2}>
            {/* Personal Information */}
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    classes={StyleClasses.profilePicture}
                    component="img"
                    src="https://i.imgur.com/fUIsscE.jpg"
                    title="Profile Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lou Sonetz
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      I am an Engineer!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Pop a Lou
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
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
      </main>
    </div>
  )
}
