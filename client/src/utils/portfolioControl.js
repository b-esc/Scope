import axios from "axios";

let endpoint = "http://localhost:8040";

var PortfolioControl = {
  querySummary : querySummary,
}

async function querySummary()
{
  return axios.get(endpoint + '/portfolio/summary').then(res => {
    if(res.error) throw(res.error);
    return res.data;
  })
}

export default PortfolioControl;
