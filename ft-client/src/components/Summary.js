// @ flow

import React, { useEffect } from 'react';
import axios from "axios";
import { useStore } from 'react-context-hook';
import Link from '@material-ui/core/Link';
import {useStyles} from '../Styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import type {Coin} from './Types';

type Props = {
  mainPageTickerData: Array<Coin>
}

export default function Summary({mainPageTickerData} : Props) {
  const StyleClasses = useStyles();
  //render onLoad once
  useEffect(() => {
    //setPreview();
  }, []);

  let tableBody = mainPageTickerData.map(x => {
    return(
      <TableRow>
        <TableCell>{x.rank}</TableCell>
        <TableCell>{x.symbol}</TableCell>
        <TableCell>{x.name}</TableCell>
        <TableCell align="left">{x.price}</TableCell>
        <TableCell align="left">{x.marketCap}</TableCell>
        <TableCell align="center">{x.volume24hr}</TableCell>
        <TableCell align="center">{x.change24hr}</TableCell>
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
            <TableCell align="center">% Volume 24 hours</TableCell>
            <TableCell align="center">% Change in 24 hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
