import React from 'react';
import { Heading, Grommet, Paragraph } from 'grommet';
import { Container, PageContainer } from './style';

import { InfosPatinhaCarente } from '../../components/infos/InfosPatinhaCarente';

export const PagePatinhaCarente = () => (
    <Grommet theme={theme}>
        <Container kind="narrow">
            <PageContainer background="#fff">
                <Heading>Patinha Carente</Heading>
                
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

                <InfosPatinhaCarente/>
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