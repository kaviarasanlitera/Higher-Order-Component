import React from 'React';
import axios from "axios";
import {useEffect, useState} from "React";

const Second=()=>{
const [responseData, SetresponseData]=useState();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>
            {
                console.log(response.data);
                SetresponseData(response.data);
            })
        .catch((error)=>{
            console.log("error", error);
            alert("error");
        }
        )
        alert("Second component is mounted");
        console.log("Second component is mounted");
      }, []);

    return(
        <>
    <div>Second component invoked</div>
    {responseData}
    </>
    );
}
export default Second;