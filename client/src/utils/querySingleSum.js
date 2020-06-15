import axios from "axios";

let endpoint = "http://localhost:8040";

export default async function querySingleSum(id)
{
  return axios.get(endpoint + '/api/summary/' + `${id}`).then(res => {
    if(res.error) throw(res.error);
    return res;
  })
}
