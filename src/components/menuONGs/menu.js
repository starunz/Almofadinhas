import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu , Grommet } from 'grommet';
import {  User } from 'grommet-icons';


export const ControlBottomMenu = () => {
    const navigate = useNavigate();

    return(
        <Grommet thome={theme}>
            <Menu color={'#FF69B4'}
                dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
                label="ONGs"
                items={[
                    { label: 'ONG1', icon: <User color={'#FF69B4'}/>, gap: 'small', onClick: () => {navigate('/ong')}},
                    { label: 'ONG2', onClick: () => {} },
                    { label: 'ONG3', onClick: () => {} },
                ]}
            />
        </Grommet>
    )
};

const theme = {
    global: {
        colors: {
            brand: '#FF69B4',
            icon: '#FF69B4',
            label: '#FF69B4',
        },
        label: {
            color: '#FF69B4',
        },

        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};