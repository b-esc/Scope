import React from 'react';
import axios from "axios";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Portfolio from '../utils/portfolioControl';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const summary = async () => {
  let preview = await Portfolio.querySummary();
  console.log(preview);
}
summary();

export default function PortfolioSum() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Current Holdings</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
