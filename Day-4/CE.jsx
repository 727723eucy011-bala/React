import React, { useState } from 'react';
import { TextField, Autocomplete, Button, Typography, Container } from '@mui/material';

const fruits = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [fruit, setFruit] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello ${name}! Your favourite fruit is ${fruit}`);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Autocomplete
          options={fruits}
          value={fruit}
          onChange={(event, newValue) => setFruit(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Favorite Fruit" variant="outlined" margin="normal" />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {message && (
        <Typography variant="h6" color="textSecondary" marginTop={2}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default GreetingForm;