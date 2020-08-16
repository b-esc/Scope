// @flow
import { Chip, Box, Typography, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from '../Styles';
import { useSpring, animated } from 'react-spring';
import type { CoinPair } from '../Types';
import { TrendingUpTwoTone, TrendingDownTwoTone } from '@material-ui/icons';

type Props = {
    scrollingTickerCoinPairs: Array<CoinPair>
}



export default function ScrollingTicker({ scrollingTickerCoinPairs }: Props) {
    const StyleClasses = useStyles();
    const [key, setKey] = useState(1);
    const scrolling = useSpring({
        from: { transform: "translate(90%, 0)" },
        to: { transform: "translate(-60%, 0)" },
        config: { duration: 14000 },
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    const toScroll = scrollingTickerCoinPairs.map(pair => {
        let isPositive = (pair.change24hr > 0);
        return (
            <Chip
                icon={
                    isPositive ? <TrendingUpTwoTone fontSize='large' />
                        : <TrendingDownTwoTone fontSize='large' />
                }
                label={`${pair.coinPairStr}  ${pair.change24hr}`}
                clickable
                color={isPositive ? "green" : "secondary"}
                style={{ marginRight: "1em" }}
            />
        )
    });


    return (
        <animated.div style={scrolling}>
            <Box
                display="flex"
                flexWrap="nowrap"
                p={1}
                m={1}>
                {toScroll}
            </Box>
        </animated.div>
    );
};