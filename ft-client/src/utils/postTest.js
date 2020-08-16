// @flow
import axios from "axios";

let endpoint: string = "http://localhost:8040";

export default async function postRqTest()
{
    const helloWorld: Object = { test_param: 'test_param_value' };
    return axios.post(
        endpoint + 
        'post_test',
        helloWorld
    ).then(
        (res) =>{
            console.log("hey i have res lou sonetz: LOU SONETZ:: ", res);
        }
    )
}