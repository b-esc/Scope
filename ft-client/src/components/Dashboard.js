import React from 'react';
import clsx from 'clsx';
import { useStyles } from '../Styles';
import { useStore } from 'react-context-hook';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavContainer from './NavContainer.js';
import NavBar from './Navbar';
import Summary from './Summary';

import queryTopSum from '../utils/queryTopSum';

export default function Dashboard()
{
  const StyleClasses = useStyles();
  const fixedHeightPaper = clsx(StyleClasses.paper, StyleClasses.fixedHeight);
  const [tickerData, setTickerData] = useStore("mainPageTickerData");

  const setPreview = async () => {
    let preview = await queryTopSum(0, 5);
    setTickerData(preview);
  }

  return (
    <div className={StyleClasses.root}>
      <CssBaseline />
      <NavBar />
      <main className={StyleClasses.content}>
        <div className={StyleClasses.appBarSpacer} />
        <Container maxWidth="lg" className={StyleClasses.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Portfolio Summary */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                portfolio sum should go here
                </Paper>
            </Grid>
            {/* Top Summarry */}
            <Grid item xs={12}>
              <Paper className={StyleClasses.paper}>
                  <Summary mainPageTickerData={tickerData}/>
                </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
