import React, { useEffect } from 'react';
import axios from "axios";
import { useStore } from 'react-context-hook';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import queryTopSum from '../utils/queryTopSum';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Summary() {
  const classes = useStyles();
  const [summary, setSummary] = useStore("summary");
  const [summary_preview, isPreview] = useStore("summary_preview_msg");

  const setPreview = async () => {
    let preview = await queryTopSum(0, 5);
    setSummary(preview);
    isPreview(true);
  }
  const setLargeView = async () => {
    let more_summary = await queryTopSum(0, 20);
    setSummary(more_summary);
    isPreview(false);
  }

  //render onLoad once
  useEffect(() => {
    setPreview();
  }, []);

  let tableBody = summary.map(x => {
    return(
      <TableRow>
        <TableCell>{x.rank}</TableCell>
        <TableCell>{x.symbol}</TableCell>
        <TableCell>{x.name}</TableCell>
        <TableCell align="left">{x.price_usd}</TableCell>
        <TableCell align="left">{x.market_cap_usd}</TableCell>
        <TableCell align="center">{x.percent_change_24h}</TableCell>
        <TableCell align="center">{x.percent_change_7d}</TableCell>
      </TableRow>
    )
  })
  return (
    <React.Fragment>
      <Title>Top Summary</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="left">Price in USD</TableCell>
            <TableCell align="left">Market Cap in USD</TableCell>
            <TableCell align="center">% Change in 24 hours</TableCell>
            <TableCell align="center">% Change in 7 days</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody}
        </TableBody>
      </Table>
        <div className={classes.seeMore}>
            {summary_preview &&
              <Link color="textSecondary" href="#" onClick={setLargeView}>
                See more
              </Link>
            }
            {!summary_preview &&
              <Link color="textSecondary" href="#" onClick={setPreview}>
                See less
              </Link>
            }
        </div>
    </React.Fragment>
  );
}
