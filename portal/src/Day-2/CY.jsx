import React from "react";
const  Smile =() =>
{
    return (<div>
    <h1 style={st.h1}>Smile Component</h1>
    <p style={st.h1}>It is a functional component</p>
    <img style={st.img} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TqCbovmLULy2o-akEijiPAHaHZ%26pid%3DApi&f=1&ipt=899c2a4c12642e1a7a3c7c438601ae2b44b6446bee325ed7d4a5a551e0aa66e0&ipo=images" alt="smiling image"></img>
    </div>
    )
}
const st = {
    h1: {
        justifyContent:'center',
        padding:'20px',
        display:'flex'
    },
    img:{
        justifyContent:'center',
        // width:'100%',
        height:'10%',
        display:'flex',
        
        padding:'150px'
    }
}
export default Smile;