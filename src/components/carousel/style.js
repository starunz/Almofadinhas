import styled from "styled-components";

import { Box, Card } from 'grommet';

const ContainerCarrosel = styled(Box)`
    @media (max-width: 450px) {
        margin-bottom: 20px;
    }

    @media (max-width: 380px) {
        margin-bottom: 20px;
    }
`
const CardImg = styled(Card)`
    img {
        position: relative;
        top: 10px;
    }

    @media(max-width: 400px) {
        img {
            width: 90%;
        }
    }

    @media(max-width: 1500px) {
        margin-bottom: 30px;
        
        img {
            width: 70%;
        }
    }

`

export {
    ContainerCarrosel,
    CardImg
}