import React from 'react';

import { Grommet, Paragraph, Text } from 'grommet';
import { Container, PageContainer } from '../../pages/PageONG/style';

export const Sobre = () => (
    <Grommet theme={theme}>
        <Container kind="narrow">
            <PageContainer background="#a6a6a6">
                <Text>
                    Olá! Bem-vindo(a) à Almofadinhas 🐾 
                </Text>
                <Paragraph>
                    Aqui você pode conhecer ONGs que ajudam animais, doar 
                    e descobrir onde você pode adotar um amigo de patas :3
                </Paragraph>
            </PageContainer>
        </Container>
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