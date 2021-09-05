import React from 'react';

import { Box } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import useStylesNavBar from './NavBarStyle';

const data = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Foods' },
    { id: 3, name: 'Pricing' }
];

const NavBar = () => {

    const classes = useStylesNavBar();

    return (
        <Box className={classes.root}>
            <Box>
                Foodology
            </Box>

            <Box className={classes.navWrapper}>
                {data.map(item =>
                    <Box key={item.id} >
                        {item.name}
                    </Box>
                )}

                <Box>
                    Sign In
                </Box>

                <Box>
                    <LocalMallIcon />
                </Box>
            </Box>
        </Box>
    );
}
    

export default NavBar;
