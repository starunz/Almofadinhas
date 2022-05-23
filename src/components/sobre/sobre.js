import React from 'react';

import { 
    Grommet, 
    Paragraph, 
    Text,
    Box
} from 'grommet';

export const Sobre = () => (
    <Grommet theme={theme}>
        <Box kind="narrow" background="#a6a6a6">
            <Text>
                Olá! Bem-vindo(a) à Almofadinhas 🐾 
            </Text>
            <Paragraph>
                Aqui você pode conhecer ONG que ajudam animais, doar 
                e descobrir onde você pode adotar um amigo de patas :3
            </Paragraph>

        </Box>
    </Grommet>
);

const theme = {
    global: {
        colors: {
            brand: '#444444',
        },

        font: {
            family: 'Roboto',
            size: '20px',
            height: '20px',
        },
    },
};