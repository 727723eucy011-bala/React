import React from 'react';
const alerter = () => 
{
  alert("Message from Javascript Alert!")
  console.log("Message to developer")
}
function load()
{
 return(<div>
  <button onClick={alerter}>Submit</button>
 </div>)
}
export default load;
