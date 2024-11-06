// import { useEffect, useState } from "react";
// import axios from 'axios';

// const Login = () => {
//   const [users, setUsers] = useState([]); 

//   useEffect(() => {
//     axios.get("http://localhost:3001/users")
//       .then(response => {
//         setUsers(response.data);
//       })
//     //   .catch(error => {
//     //     console.error(error);
//     //   });
//   }, []);

//   return (
//     <ul>
//       {users.map(user => (
//         <div key={user.id}>
//           <p>{user.title}</p>
//           <p>{user.author}</p>
//         </div>
//       ))}
//     </ul>
//   );
// };

// export default Login;
import React, { useState,useEffect } from "react";
import axios from "axios";
const Login =() =>
{
    const [names, setName] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/users")
            .then(res => {
                setName(res.data);
            })
    },[]);
    return (
        <li>
            {names.map((usr)=>
                (<div key={usr.id}> 
                    <p>{usr.title}</p>
                </div>
                ))
            }
        </li>
    )
};
export default Login;