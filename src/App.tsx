import './App.css';
import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import ResultList from './components/ResultList';
import axios from 'axios';
import { Grid } from '@mui/material';

function App() {
  const [resultData, setResultData] = useState();

  const getData = (word) => {
    axios.get(`https://sozluk.gov.tr/gts?ara=${word}`).then((response) => {
      setResultData(response.data[0]);
    });
  };
  return (
    <Grid
      container
      direction={'column'}
      justifyContent="center"
      alignItems="center"
    >
      <SearchBox onSearch={getData} />
      <ResultList resultData={resultData} />
    </Grid>
  );
}

export default App;
