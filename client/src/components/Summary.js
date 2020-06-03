import React from 'react';
import axios from "axios";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import queryTopSum from '../utils/queryTopSum';
import { useStore } from 'react-context-hook';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Summary() {
  const classes = useStyles();
  const [summary, setSummary] = useStore("summary");
  const setPreview = async () => {
    let preview = await queryTopSum(0, 5);
    setSummary(preview);
  }

  let tableBody = summary.map(x => {
    return(
      <TableRow>
        <TableCell>{x.rank}</TableCell>
        <TableCell>{x.symbol}</TableCell>
        <TableCell>{x.name}</TableCell>
        <TableCell align="right">{x.price_usd}</TableCell>
      </TableRow>
    )
  })
  return (
    <React.Fragment>
      <Title>Top Summary</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price in USD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={async () => {
          let more_summary = await queryTopSum(0, 20);
          console.log("MORE SUMMARY",more_summary)
          setSummary(more_summary);
        }}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
