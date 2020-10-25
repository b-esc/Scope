import React from 'react';
import clsx from 'clsx';
import { useStyles } from '../Styles';
import { useStore } from 'react-context-hook';
import { Paper, Grid, CssBaseline, Container } from '@material-ui/core';
import bcImg from '../static/images/blockchain.jpg';
import dnaImg from '../static/images/dna_large.jpg';
import TestGraph from './TestGraph';
import Summary from './Summary';
import { SampleLineData } from '../Types';
import ContentCard from './ContentCard';
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
    <Container maxWidth="lg" className={StyleClasses.container}>
      <Grid spacing={2} padding={2} container>
        <Grid container spacing={2} item>
          {/* News Preview */}
          <Grid item>
            <Paper>
              <ContentCard
                rootMaxWidth={400}
                mediaMaxHeight={200}
                cardImg={bcImg}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <ContentCard
                rootMaxWidth={400}
                mediaMaxHeight={200}
                cardImg={dnaImg}
              />
            </Paper>
          </Grid>
          {/* Portfolio Summary */}
          <Grid item>
            <Paper>
              <LightweightChart
                containerId={"sampleLwChart"}
                width={400}
                height={370}
                lineData={SampleLineData}
              />
            </Paper>
          </Grid>
        </Grid>
        {/* Top Summarry */}
        <Grid item xs={12}>
          <Paper className={StyleClasses.paper}>
            <Summary mainPageTickerData={tickerData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
