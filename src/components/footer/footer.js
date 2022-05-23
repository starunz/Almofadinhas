import React from 'react';

import {
    Grommet as GrommetIcon,
    MailOption,
    Github
} from 'grommet-icons';

import { Container } from './style';

import { ControlBottomMenu } from '../menuONGs/menu';

import { Anchor, Box, Grommet} from 'grommet';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center" color={'#FF69B4'}>
    <Anchor
      a11yTitle="Contact"
      href="mailto:busouza01@gmail.com"
      icon={<MailOption color="#FF69B4" />}
    />
    <Anchor
      a11yTitle="Contact"
      href="https://github.com/starunz"
      icon={<Github color="#FF69B4" />}
    />
  </Box>
);

export const FooterMenu = () => (
    <Grommet theme={theme}>
        <Box kind="full">
            <Container background="light-4" pad="small" kind="full">
                <Box align="center" direction="row" gap="xsmall">
                    <ControlBottomMenu/>
                    <Box>Eventos</Box>
                </Box>
                <Media />
            </Container>
        </Box>
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