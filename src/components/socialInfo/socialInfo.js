import React from 'react';

import { Container } from './style';
import { 
    Anchor, 
    Grommet
} from 'grommet';

import {
    Instagram,
    MailOption
} from 'grommet-icons';

export const SocialInfo = () => (
     <Grommet theme={theme}>
        <Container>
            <Anchor 
                href="https://instagram.com/patinhacarente" 
                icon={<Instagram/>} 
                label="patinhacarente" 
            />
            <Anchor 
                href="mailto:ong.patinha.carente@gmail.com" 
                icon={<MailOption/>} 
                label="ong.patinha.carente@gmail.com" 
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