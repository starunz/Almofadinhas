import styled from "styled-components";

import { Page, PageContent, Box } from 'grommet';

const Container = styled(Page)`
    width: 100%;
    color: #fff;

    margin: 50px 0 50px 0;
`

const PageContainer = styled(PageContent)`
    width: 100%;
`
const Logo = styled(Box)`
    svg {
        margin-bottom: 15px;
        cursor: pointer;
    }
`
const LogoPatinha = styled(Box)`
    svg {
        margin-bottom: 15px;
        cursor: pointer;
    }

    img {
        margin: 20px 0 25px 0;
    }
`

export {
    Container,
    PageContainer,
    Logo,
    LogoPatinha
}