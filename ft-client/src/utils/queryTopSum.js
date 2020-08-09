import axios from "axios";

let endpoint = "http://localhost:8040";

export default async function queryTopSum(start, end)
{
  return axios.get(endpoint + '/api/top_summary/' + `${start}/${end}`).then(res => {
    if(res.error) throw(res.error);
    return res.data.data;
  })
}
