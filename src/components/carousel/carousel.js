import React from 'react';
import amoranimal from '../../assets/amoranimal.PNG'
import patinhacarente from '../../assets/patinhacarente.png';
import embreve from '../../assets/embreve4.png';

import { Box, Carousel, Grommet, Grid } from 'grommet';
import { CardImg } from './style';

const data = [
  amoranimal,
  patinhacarente,
  embreve,
  amoranimal,
  patinhacarente,
  embreve,
];

const View0 = () => {
  const imgs = data.slice(0, 3);
  return (
    <Grid rows="small" columns={{ count: 'fit', size: 'small' }} gap="small">
      {imgs.map((img) => (
          <CardImg background="white" pad="large" align='center' justify='center' style={{padding:0}}>
            <img key={img} src={img} fit="contain" width='40%' alt='ue' />
          </CardImg>
      ))}
    </Grid>
  );
};
const View1 = () => {
  const imgs = data.slice(3, 6);
  return (
    <Grid rows="small" columns={{ count: 'fit', size: 'small' }} gap="small">
      {imgs.map((img) => (
        <CardImg background="white" pad="large" align='center' justify='center' style={{padding:0}}>
          <img key={img} src={img} fit="contain" width='40%' alt='ue' />
        </CardImg>
      ))}
    </Grid>
  );
};

export const Multi = () => (
   <Grommet theme={theme}>
    <Box style={{margin:60}} >
        <Carousel play={3000} controls={false}>
          <View0 />
          <View1 />
        </Carousel>
    </Box>
  </Grommet>
);


const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },

        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};
