// @flow
import React from 'react';
import type {Coin} from './Types';
import Dashboard from './components/Container';
import { withStore } from 'react-context-hook';

export default function App(){
  return(
    <div className="App">
      <Dashboard/>
    </div>
  )
}
const sampleCoin : Coin = {
  rank: 1,
  symbol: "LOU",
  name: "LOU SONETZ COIN",
  price: 10.51,
  marketCap: 66000000,
  volume24hr: 100000,
  change24hr: 0.87,
  change7days: 4.87,
  change1month: 10.12,
}

const sampleCoin2 : Coin = {
  rank: 2,
  symbol: "LOU",
  name: "LOU SONETZ COIN",
  price: 234,
  marketCap: 4324,
  volume24hr: 423423,
  change24hr: 0.87,
  change7days: 4.87,
  change1month: 10.12,
}

const initialState : {
  mainPageTickerData: Array<Coin>,
} = {
  mainPageTickerData: [sampleCoin, sampleCoin2, sampleCoin, sampleCoin2],
}