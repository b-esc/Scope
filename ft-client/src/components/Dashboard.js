import React from 'react';
import clsx from 'clsx';
import { useStyles } from '../Styles';
import { useStore } from 'react-context-hook';
import { Paper, Grid, CssBaseline, Container } from '@material-ui/core';
import NavBar from './Navbar';
import TestGraph from './TestGraph';
import Summary from './Summary';
import { SampleLineData } from '../Types';
import PostPreview from './PostPreview';
import queryTopSum from '../utils/queryTopSum';
import LightweightChart from './LightweightChart';

export default function Dashboard() {
  const StyleClasses = useStyles();
  const fixedHeightPaper = clsx(StyleClasses.paper, StyleClasses.fixedHeight);
  const [tickerData, setTickerData] = useStore("mainPageTickerData");

  const setPreview = async () => {
    let preview = await queryTopSum(0, 5);
    setTickerData(preview);
  }

  return (
    <div className={StyleClasses.root}>
      <NavBar />
      <main className={StyleClasses.content}>
        <div className={StyleClasses.appBarSpacer} />
        <Container maxWidth="lg" className={StyleClasses.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid container item xs={12} md={8} lg={9}>
              <Grid item xs={12}>
                <Paper>
                  <PostPreview />
                </Paper>
              </Grid>
              <Grid item>
                <Paper>
                  <PostPreview />
                </Paper>
              </Grid>
            </Grid>

            {/* Portfolio Summary */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <LightweightChart
                  containerId={"sampleLwChart"}
                  width={243}
                  height={243}
                  lineData={SampleLineData}
                />
              </Paper>
            </Grid>
            {/* Top Summarry */}
            <Grid item xs={12}>
              <Paper className={StyleClasses.paper}>
                <Summary mainPageTickerData={tickerData} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
