import axios from "axios";

let endpoint = "http://localhost:8040";

export async function querySingleSum(id)
{
  return axios.get(endpoint + '/api/summary/' + `${id}`).then(res => {
    if(res.error) throw(res.error);
    return res;
  })
}

// limitToPairs: Array<string>, where string = 'VET/USDT', 'XLM/USDT' etc..
// if one is not provided, we give all by default
export async function getTickers(limitToPairs=[])
{
  return axios.post(endpoint + '/api/fetch_tickers/', {limitToPairs: limitToPairs}).then(res =>{
    if(res.error) throw(res.error);
    return res;
  })
}

// endpoint + '/api/fetch_tickers'
