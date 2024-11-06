import React, { useState } from "react";
export const E2 =() =>
{
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [msg, setMsg] = useState([]);

    const OnClicked = (e) =>
    {
        e.preventDefault();
        console.log(name)
        console.log( email);
        console.log(msg);
    }
    return(
        <>
        <form style={{textAlign:"center",padding:"50px"}}>
            <label>Name</label><br />
            <input name = "name" type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}/><br />
            
            <label>Email</label><br />
            <input name = "email" type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}/><br />

            <label>Message</label><br />
            <input name = "msg" type="text"
            value={msg}
            onChange={(e)=> setMsg(e.target.value)}/><br /> <br />
            <button
            onClick={OnClicked}>Submit</button>
        </form>
        </>
    )
}