import React from 'react';

import { Box, Carousel, Grommet, Card, Grid } from 'grommet';

const data = [
  'Doar',
  'ue 2',
  'ue3',
  'ue 4',
  'ue 5',
  'ue 6',
];

const View0 = () => {
  const imgs = data.slice(0, 3);
  return (
    <Grid rows="small" columns={{ count: 'fit', size: 'small' }} gap="small">

        {imgs.map((img) => (
            <Card background="white" pad="large">{img}</Card>
        ))}
    </Grid>
  );
};
const View1 = () => {
  const imgs = data.slice(3, 6);
  return (
    <Grid rows="small" columns={{ count: 'fit', size: 'small' }} gap="small">

        {imgs.map((img) => (
            <Card background="white" pad="large">{img}</Card>
        ))}
    </Grid>
  );
};

export const Multi = () => (
   <Grommet theme={theme}>
    <Box style={{margin:20}}>
        <Carousel play={3000}>
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
