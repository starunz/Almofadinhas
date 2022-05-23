import styled from "styled-components";

import { Box } from "grommet";

const Container = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        color: #444444;
        font-size: 25px;
        font-weight: bold;
    }

    p {
        font-size: 20px;
    }

    @media(max-width: 450px) {
        span {
            margin-left: 60px;
        }
        p {
            margin-left: 10px;
        }
    }
`

export {
    Container,
}