import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';

function SearchBox({ onSearch }) {
  const [word, setWord] = useState('');
  const handleChange = (event) => {
    setWord(event.target.value);
  };
  return (
    <form>
      <Grid
        container
        mt={2}
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Kelime Girin"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => onSearch(word)}>
            Ara
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default SearchBox;
