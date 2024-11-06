import React,{useState} from "react";
export const E5 =() =>
{
    const [name, setName] = useState(false);
    const [number, setNumber] = useState(1);
    const change = () =>{
        setNumber(number+1);
        if(number%4 === 0)
        {
            setName(!name);
        }
    }
    return(
        <div>
            <button onClick={change}>{name?"Kaioken":"SuperSaiyan"}</button>
            <p>{number}</p>
        </div>
    )
}