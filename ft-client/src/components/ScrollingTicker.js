// @flow
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import React, { useState } from 'react';
import { useStyles } from '../Styles';
import { useSpring, animated } from 'react-spring';
import type { CoinPair } from '../Types';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';

type Props = {
    scrollingTickerCoinPairs: Array<CoinPair>
}



export default function ScrollingTicker({ scrollingTickerCoinPairs }: Props) {
    const StyleClasses = useStyles();
    const [key, setKey] = useState(1);
    const scrolling = useSpring({
        from: { transform: "translate(90%, 0)" },
        to: { transform: "translate(-60%,0)" },
        config: { duration: 14000},
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });
    
    const toScroll = scrollingTickerCoinPairs.map(pair => {
        let isPositive = (pair.change24hr > 0);
        let pairInfo = <div >
            {pair.coinPairStr} + {' '} + {pair.change24hr}
            
            {isPositive && <TrendingUpTwoToneIcon fontSize='large'/>}
            {!isPositive && <TrendingDownTwoToneIcon fontSize='large'/>}
        </div>
        return (
            <Chip
                icon={isPositive ? <TrendingUpTwoToneIcon fontSize='large'/> : <TrendingDownTwoToneIcon fontSize='large'/>}
                label={`${pair.coinPairStr}  ${pair.change24hr}`}
                clickable
                color={isPositive ? "primary" : "secondary"}
                style={{marginRight:"1em"}}
            />
        )
    });


    return (
        <Toolbar className={StyleClasses.toolbar}>
            <Typography component="h1" variant="h4" color="inherit" noWrap className={StyleClasses.title}>
                <Box fontFamily="Monospace">
                    <div>
                        <animated.div style={scrolling}>
                            <Box
                                display="flex"
                                flexWrap="nowrap"
                                p={1}
                                m={1}>
                                {toScroll}
                            </Box>
                        </animated.div>
                    </div>
                </Box>
            </Typography>
        </Toolbar>
    );
};