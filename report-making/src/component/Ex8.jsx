import React from "react";
import {Dialog,Button, DialogTitle, DialogActions,DialogContent,TextField } from "@mui/material";
import {useState} from 'react';
export const E8 =() =>{
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const [open, setOpen] = useState(false);
    const opening = () => {
        setOpen(true);
    }
    const closing = () => {
        setOpen(false);
    }
    const showCredentials = () =>
    {
        console.log(`Credentials are ${username} and ${password}`)
    }
    return(
        <>
        <Button
        onClick={opening}
        data-testid="login">Login</Button>
        <Dialog open={open} onClose={false}>
            <DialogTitle label="Login" data-testid="dialog title">LOGIN</DialogTitle>
            <DialogContent>
                <TextField 
                value={username}
                data-testid="username"
                placeholder="username" type="text"
                onChange={(e)=>setUser(e.target.value)}/><br/>
                <br/>
                <TextField 
                value={password}
                data-testid="password"
                placeholder="password" type="password"
                onChange={(e)=>setPass(e.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={closing}>CANCEL</Button>
                <Button data-testid="dia-login"
                onClick={showCredentials}>LOGIN</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}