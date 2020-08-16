// @flow
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import React from 'react';
import { useStyles } from '../Styles';
import ScrollingTicker from './ScrollingTicker';
import type { CoinPair } from '../Types';

const samplePairs: Array<CoinPair> = [{ coinPairStr: "BTC/USD", change24hr: 2.4 },
{ coinPairStr: "BTC/BRL", change24hr: 3.5 }, { coinPairStr: "BTC/USD", change24hr: -1.4 }, { coinPairStr: "BTC/JPY", change24hr: -15.2 },
{ coinPairStr: "BTC/BGN", change24hr: 5.1 }, { coinPairStr: "BTC/PNY", change24hr: 5.1 }, { coinPairStr: "BTC/QRT", change24hr: 5.1 },
{ coinPairStr: "BTC/XCD", change24hr: 4.2 }, { coinPairStr: "BTC/TNT", change24hr: -15.3 }, { coinPairStr: "BTC/CVO", change24hr: -51.1 }]


export default function Navbar() {
    const StyleClasses = useStyles();
    return (
        <div>

        <AppBar position="absolute">
        <Toolbar className={StyleClasses.toolbar}>
            <Typography component="h1" variant="h4" color="inherit" noWrap className={StyleClasses.title}>
            </Typography>
            <ScrollingTicker scrollingTickerCoinPairs={samplePairs} />

            </Toolbar>
        </AppBar>
        </div>
    )
}
