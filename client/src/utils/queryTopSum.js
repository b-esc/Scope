import axios from "axios";

let endpoint = "http://localhost:8040";

export default async function queryTopSum(start, end)
{
  console.log("Querying server endpoint...");
  return axios.get(endpoint + '/api/top_summary/' + `${start}/${end}`).then(res => {
    if(res.error) throw(res.error);
    let data = res.data.map;
    console.log(data);
    return data;
  })
}
