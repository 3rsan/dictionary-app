import { List, ListItem, Box, Divider } from '@mui/material';
import React from 'react';

type Definition = {
  anlam: string;
};

type ResultData = {
  anlamlarListe: Definition[];
};

type ResultListProps = {
  resultData: ResultData;
};

function ResultList({ resultData }: ResultListProps) {
  return (
    <>
      {resultData && (
        <List sx={{ bgcolor: 'background.paper' }}>
          {resultData.anlamlarListe.map((item, index) => (
            <Box>
              <ListItem alignItems="flex-start" key={index}>
                {item.anlam}
              </ListItem>
              <Divider component="li" />
            </Box>
          ))}
        </List>
      )}
    </>
  );
}

export default ResultList;
