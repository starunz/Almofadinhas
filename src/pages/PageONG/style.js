import styled from "styled-components";

import { Page, PageContent } from 'grommet';

const Container = styled(Page)`
    width: 100%;
    color: #fff;

    margin: 50px 0 50px 0;
`

const PageContainer = styled(PageContent)`
    width: 100%;

`
export {
    Container,
    PageContainer
}