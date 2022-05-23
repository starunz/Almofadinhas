import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu , Grommet } from 'grommet';
import { Home, Group} from 'grommet-icons';


export const ControlBottomMenu = () => {
    const navigate = useNavigate();

    return(
        <Grommet theme={theme}>
            <Menu color={'#FF69B4'}
                dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
                label="ONGs"
                items={[
                    { label: 'Patinha Carente', icon: <Group color={'#FF69B4'}/>, gap: 'small', onClick: () => {navigate('/ong')}},
                    { label: 'ONG2', icon: <Group color={'#FF69B4'}/>,  gap: 'small', onClick: () => {} },
                ]}
            />
        </Grommet>
    )
};

const theme = {
    global: {
        colors: {
            brand: '#FF69B4',
        },

        font: {
            family: 'Roboto',
            size: '20px',
            height: '20px',
            weight:'bold'
        },
    },
};