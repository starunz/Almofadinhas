import React from 'react';

import { Box, Tab, Tabs, Grommet } from 'grommet';
import { Favorite, Group, Schedule } from 'grommet-icons';

import { FormDonation } from '../form/form';

export const Infos = () => (
    <Grommet theme={theme}>
        <Box align="center" pad="medium">
            <Tabs>
                <Tab title="Doar" icon={<Favorite />}>
                    <FormDonation />
                </Tab>

                <Tab title="Contatos" icon={<Group />}>
                    <Box margin="small">Redes sociais</Box>
                </Tab>

                <Tab title="Eventos" icon={<Schedule />}>
                    <Box margin="small">Data, hora e local</Box>
                </Tab>
            </Tabs>
        </Box>
    </Grommet>
);

const theme = {
    global: {
        colors: {
            brand: '#FF69B4',
        },

        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    }
};