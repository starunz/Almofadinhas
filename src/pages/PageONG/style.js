import styled from "styled-components";

import { Page, PageContent } from 'grommet';

const Container = styled(Page)`
    width: 100%;
    color: #fff;

    margin-top: 50px;
`

const PageContainer = styled(PageContent)`
    width: 100%;

`
export {
    Container,
    PageContainer
}