import React from 'react';

import { Container } from './style';
import { 
    Anchor, 
    Grommet
} from 'grommet';

import {
    Instagram
} from 'grommet-icons';

export const SocialInfoAmorAnimal = () => (
     <Grommet theme={theme}>
        <Container>
            <Anchor 
                href="https://instagram.com/amoranimal_acre" 
                icon={<Instagram/>} 
                label="amoranimal_acre" 
            />
        </Container>
    </Grommet>
);

const theme = {
    global: {
        colors: {
            brand: '#444444',
        },

        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    }
}