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

  const getSummary = async () => {
    let preview = await PortfolioControl.querySummary();

    var preview_keys = Object.keys(preview);
    var preview_values = Object.values(preview);
    console.log(preview_values[0], typeof(preview_values[0]));

    let total = 0;
    for(var i = 0; i < preview_keys.length; i++) {
        let coin_price = await getPricebyID(preview_keys[i]);
        let coin_value = parseInt(coin_price) * preview_values[i];
        total += coin_value;
    }
    console.log(total);
  }

  const getPricebyID = async (id) => {
    let info = await querySingleSum(id);
    return info.data[0].price_usd;
  }

  //render onLoad once
  useEffect(() => {
    getSummary();
  }, []);

  return (
    <React.Fragment>
      <Title>Current Holdings</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}
