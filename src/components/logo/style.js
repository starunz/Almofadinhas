import styled from "styled-components";
import { Box } from "grommet";

const Container = styled(Box)`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;

    background-color: #FF69B4;

    @media (max-width: 710px) {
        video {
            width: 80%;
        }
    }

    @media (max-width: 810px) {
        video {
            width: 30%;
        }
    }

    @media (max-width: 450px) {
        video {
            width: 95%;
        }
    }

    @media (max-width: 380px) {
        video {
            width: 90%;
        }
    }

    @media (max-width: 580px) {
        video {
            width: 50%;
        }
    }
`
export { Container }