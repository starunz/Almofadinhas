import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading, Grommet, Paragraph } from 'grommet';
import { Container, PageContainer, Logo } from './style';
import { Infos } from '../../components/infos/infosAmorAnimal';

import amoranimal from '../../assets/amoranimal.PNG'

import { Home } from 'grommet-icons';

export const PageAmorAnimal = () => {
    const navigate = useNavigate()
    
    return(
        <Grommet theme={theme}>
            <Container kind="narrow">
                <PageContainer background="#fff">
                    <Logo justify='between' direction='row' align='center'>
                        <img src={amoranimal} alt='amoranimal' width='100px' />
                        <Home color={'#FF69B4'} size='40px' onClick={() => {navigate('/')}}/>
                    </Logo>

                    <Heading>Amor Animal</Heading>

                    <Paragraph>
                        Depoimento da Fernanda Évelyn Leite De Oliveira 
                        fundadora da ONG Amor Animal.
                    </Paragraph>
                    <Paragraph textAlign='justify' text-justify='inter-word'>
                        A Amor Animal teve início, após uma perca grande pra mim,
                        sempre cuidei de todos os animais da rua onde eu moro,
                        e de onde eu ia. Até que no final do ano de 2020 me 
                        deparei com uma situação de maus-tratos de 2 cachorros,
                        eles acabaram se mudando pra rua onde eu moro, em frente
                        a minha casa sempre fica cheio de animais e certas pessoas
                        começaram a se incomodar, até que um homem disse: "vou fazer
                        com esses cachorros o mesmo que fiz com o gato" e dias 
                        depois o cachorro mais antigo que eu cuidava, foi atropelado,
                        foram dias eu lutando contra eu mesma, para não ir atrás de 
                        briga, noites acordadas tentando acalmar ele, tudo foi feito,
                        mas ele era idoso e teve todo o seu corpo quebrado, adquiriu 
                        problemas neurológicos e seus órgãos começaram a paralisar. 
                        Deram alta, mas eu só iria prolongar o sofrimento, os remédios
                        não fariam efeitos e eu tive que tomar a primeira decisão, à eutanásia,
                        e depois disso eu tomei a iniciativa de dar voz aos animais de rua, 
                        que são agredidos diariamente e atualmente eu estou com vários animais 
                        resgatados, tiro da rua com a ajuda da sociedade com doações, levo a clínica,
                        e coloco eles para adoção, pois não tenho como dar um lar provisório à eles.
                        A ONG Amor Animal existe para dar voz aos animais, proteger e tentar salvar o máximo
                        de vidas possível. 
                    </Paragraph>
    
                    <Infos/>
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