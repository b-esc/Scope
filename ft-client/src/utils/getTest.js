// @flow
import axios from "axios";

let endpoint = "http://localhost:8040";

export default async function getTest(nCoinRanks: number)
{
  return axios.get(endpoint + '/test/' + `${nCoinRanks}`).then(res => {
    if(res.error) throw(res.error);
    console.log(res);
    return res;
  })
}
