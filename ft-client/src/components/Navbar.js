// @flow
import { Paper, AppBar, Toolbar, Typography, Icon, Box, Grid, Button } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../Styles';
import ScrollingTicker from './ScrollingTicker';
import { Home, AccountCircle, Forum, TrendingUp} from '@material-ui/icons';
import type { CoinPair } from '../Types';

const samplePairs: Array<CoinPair> = [{ coinPairStr: "BTC/USD", change24hr: 2.4 },
{ coinPairStr: "BTC/BRL", change24hr: 3.5 }, { coinPairStr: "BTC/USD", change24hr: -1.4 }, { coinPairStr: "BTC/JPY", change24hr: -15.2 },
{ coinPairStr: "BTC/BGN", change24hr: 5.1 }, { coinPairStr: "BTC/PNY", change24hr: 5.1 }, { coinPairStr: "BTC/QRT", change24hr: 5.1 },
{ coinPairStr: "BTC/XCD", change24hr: 4.2 }, { coinPairStr: "BTC/TNT", change24hr: -15.3 }, { coinPairStr: "BTC/CVO", change24hr: -51.1 }]


export default function Navbar() {
    const StyleClasses = useStyles();
    return (
        <AppBar position="absolute">
            <Grid container direction="column">
                <Grid container spacing={5} direction="row" item justify="center">
                    <Grid item>
                        <Button size="large" variant="outlined">
                            <Forum large/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button size="large" variant="outlined">
                            <Home large/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h4">
                            Scope Digital Assets
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Button size="large" variant="outlined">
                            <AccountCircle large/>
                        </Button>
                    </Grid>
                    <Grid item >
                        <Button size="large" variant="outlined">
                            <TrendingUp large/>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <ScrollingTicker scrollingTickerCoinPairs={samplePairs} />
                </Grid>
            </Grid>
        </AppBar>

    )
}
