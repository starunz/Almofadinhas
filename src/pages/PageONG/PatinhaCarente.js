import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading, Grommet, Paragraph } from 'grommet';
import { Container, PageContainer, LogoPatinha } from './style';
import { InfosPatinhaCarente } from '../../components/infos/InfosPatinhaCarente';

import { Home } from 'grommet-icons';

import patinhacarente from '../../assets/patinhacarente.png';

export const PagePatinhaCarente = () => {
    const navigate = useNavigate()

    return(
        <Grommet theme={theme}>
            <Container kind="narrow">
                <PageContainer background="#fff">
                    <LogoPatinha justify='between' direction='row' align='center'>
                        <img src={patinhacarente} alt='amoranimal' width='100px'/>
                        <Home color={'#FF69B4'} size='40px' onClick={() => {navigate('/')}}/>
                    </LogoPatinha>

                    <Heading>Patinha Carente</Heading>
                    
                    <Paragraph textAlign='justify' text-justify='inter-word'>
                        A ONG Patinha Carente teve início em 2013 e desde
                        então vem ajudando nossos amiguinhos de patas! 
                    </Paragraph>

                    <InfosPatinhaCarente/>
                </PageContainer>
            </Container>
    </Grommet>
    )
};

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