import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStore } from 'react-context-hook';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

const initialState = {
  //top_summary values
  summary: [{rank:1, symbol:"LOU", name:"lou sonetz", price_usd:21.2},
            {rank:2, symbol:"CHR", name:"chris sonetz", price_usd:1}],

  summary_preview_msg : true,
}

const storeConfig ={
  // Below console.log's on each state change
  listener: (state) =>{
    console.log('state changed!', state)
  }
}

export default withStore(App, initialState, storeConfig)
