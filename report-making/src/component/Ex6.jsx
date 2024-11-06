import React, { useState } from "react"
export const E6 = () =>{
    const [city,setCity] = useState('');
    // const change =() => {
    //     setCity(city)
    // }
    return(
        <div style={{textAlign:"center"}}>
        <h1>Weather Application</h1><br /><br />
        
            <input placeholder="Enter location"
            name ="city"
            value ={city}
            onChange = {(e)=>{setCity(e.target.value)}}
            />
            
            {/* <button onClick={change}>Update Location</button> */}
            <h3>Current Weather in {city}</h3>
            <p>Temperature: 20°C</p>
            <p>Condition: Sunny</p>
            
        </div>
    )
}