import React from "react";
const Greeting = ({name}) =>
{
    return(
        <div>
            <h1>Hello, {name}!</h1><br />
            <p>Welcome back</p>
        </div>
    );
}
export default Greeting;