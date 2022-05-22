import React from 'react';

import { Container } from './style';
import { 
    Anchor, 
    Grommet
} from 'grommet';

import {
    Instagram
} from 'grommet-icons';

export const SocialInfo = () => (
     <Grommet theme={theme}>
        <Container>
            <Anchor 
                href="#" 
                icon={<Instagram/>} 
                label="Instagram" 
            />
            <Anchor 
                href="#" 
                icon={<Instagram/>} 
                label="Instagram" 
            />
            <Anchor 
                href="#" 
                icon={<Instagram/>} 
                label="Instagram" 
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