import React from "react";
const cchecker = () =>
    {
        const name1 = "SamAlex"
        const name2 = "SamAlex"
        if(name1===name2)
            console.log("true");
        else
            console.log("false");
        const ob1 = {name:"SamAlex"};
        const ob2 = {name:"SamAlex"};
        if(ob1.name===ob2.name)
            console.log("true");
        else
            console.log("false");
}
function Check()
{
return(<div>
    <button onClick={cchecker}>Compare</button>
</div>)
}
export default Check;