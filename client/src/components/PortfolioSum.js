import React, { useEffect } from 'react';
import axios from "axios";
import { useStore } from 'react-context-hook';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import PortfolioControl from '../utils/portfolioControl';
import querySingleSum from '../utils/querySingleSum';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function PortfolioSum() {
  const classes = useStyles();
  const [cur_holdings, setHoldings] = useStore("cur_holdings");

  const getPricebyID = async (id) => {
    let info = await querySingleSum(id);
    return info.data[0].price_usd;
  }

  const getSummary = async () => {
    let preview = await PortfolioControl.querySummary();
    var preview_keys = Object.keys(preview);
    var preview_values = Object.values(preview);

    let total = 0;
    for(var i = 0; i < preview_keys.length; i++) {
        let coin_price = await getPricebyID(preview_keys[i]);
        let coin_value = parseInt(coin_price) * preview_values[i];
        total += coin_value;
    }
    setHoldings(total);
  }

  //render onLoad once
  useEffect(() => {
    getSummary();
  }, []);

  return (
    <React.Fragment>
      <Title>Current Holdings</Title>
        <Typography component="p" variant="h4" textAlign="center">
            $ {cur_holdings}
        </Typography>
    </React.Fragment>
  );
}
