import axios from "axios";
import React, { useEffect, useState } from "react";
const Develop =()=>
{
    const [name,setName] = useState([]);
    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2')
        // .then(res=>console.log(res))
        .then(res=>setName(res.data.data))
        .catch(err=>console.log(err));
    },[])
    return(<div>
        <h2>Axios</h2>
        {
            name.map((d,i)=>{
                return (<p key={i}>
                    {d.email}
                </p>);
            })
        }
    </div>)
}
export default Develop;