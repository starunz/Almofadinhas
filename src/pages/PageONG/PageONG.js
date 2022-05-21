import React from 'react';
import { Heading, Grommet, Paragraph } from 'grommet';
import { Container, PageContainer } from './style';

import { Infos } from '../../components/infos/Infos';

export const PageONG = () => (
    <Grommet theme={theme}>
        <Container kind="narrow">
            <PageContainer background="#fff">
                <Heading>Nome da ONG</Heading>
                
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>
                <Paragraph>
                    História
                </Paragraph>

                <Infos/>
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