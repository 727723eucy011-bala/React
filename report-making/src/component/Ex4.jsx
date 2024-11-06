// Thomas is working on a dashboard for a messaging 
// application where users can toggle the
// display of an additional message content.
//  The requirement is to create a React component
// named ToggleMessage that initially shows a
//  button labeled &quot;Show Message&quot;.
//   Upon clickingthe button, it should reveal a
//    section containing a friendly message.
//  Your task is to help
// Thomas implement the Condition component using React
// This component should render a
// button labeled &quot;Show Component&quot
// ;. When the button is clicked, it 
// toggles its text to &quot;Hide
// Component&quot; and reveals a
//  friendly greeting message, represented by the
//   text &quot;Hi! How are
// You!!!&quot;.

import React, { useState } from "react";
export const E4 =() =>
{
    const [show , setShow] = useState(false);
    const click = () =>
    {
        setShow(!show)
    }
    return(
        <div>
            <button onClick={click}>
                {
                    show ?"Hide Component":"Show Component"
                }
            </button>
            <br />
            {show && <p>Hi how are you!!!</p>}
        </div>
    )
}