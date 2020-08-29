// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import type {Coin} from './Types';
import Dashboard from './components/Dashboard';
import PortfolioSummary from './components/PortfolioSummary';
import { withStore } from 'react-context-hook';
import NavBar from './components/Navbar';


function App(){
  return(
    <div className="App">
      <Router>
      {/* Navbar stays inside router */ }
      <NavBar />
      {/* TODO remove brazil */ }
      <br></br>
        <Switch>
          <Route>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/portfolio" component={PortfolioSummary}/>
          </Route>
        </Switch>
      </Router>
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
  symbol: "BLM",
  name: "BLACK LIVES MATTER",
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

const storeConfig ={
  // Below console.log's on each state change
  listener: (state) =>{
    console.log('state changed!', state)
  }
}

export default withStore(App, initialState, storeConfig)
