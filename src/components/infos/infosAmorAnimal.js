import React from 'react';

import { Box, Tab, Tabs, Grommet } from 'grommet';
import { Favorite, Group, Schedule } from 'grommet-icons';

import { FormDonationAmorAnimal } from '../form/formAmorAnimal';
import { SocialInfoAmorAnimal } from '../socialInfo/socialInfoAmorAnimal';

export const Infos = () => (
    <Grommet theme={theme}>
        <Box align="center" pad="medium">
            <Tabs>
                <Tab title="Doar" icon={<Favorite />}>
                    < FormDonationAmorAnimal/>
                </Tab>

                <Tab title="Contatos" icon={<Group />}>
                    <SocialInfoAmorAnimal/>
                </Tab>

                <Tab title="Eventos" icon={<Schedule />}>
                    <Box margin="small">
                        Não existem eventos marcados ainda 😐 mas fique atento 😉
                    </Box>
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