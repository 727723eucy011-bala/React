import React ,{useState} from "react";
import { Autocomplete,TextField,Button } from "@mui/material";
export const E7 =() =>{
const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

  const [name, setName] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState(null);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(`Hello, ${name}! Your favorite fruit is ${favoriteFruit}`);
  };
  
  return(
    <>
    <TextField label="Name" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    data-testid="Name"/>
    <Autocomplete 
    options={fruits}
    getOptionLabel={(option)=> option}
    value={favoriteFruit}
    onChange={(e,targeted)=>setFavoriteFruit(targeted)}
    renderInput={(params)=> <TextField {...params} label="Choose a fruit" data-testid="autocomplete" />}
    />
    <Button variant="outlined" onClick={handleSubmit} data-testid="button">
    Submit</Button>

    </>
  );
}

