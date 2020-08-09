import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import {useStyles} from '../Styles';



export default function Navbar() {
    const StyleClasses = useStyles();
    return(
    <AppBar position="absolute">
        <Toolbar className={StyleClasses.toolbar}>
            <Typography component="h1" variant="h4" color="inherit" noWrap className={StyleClasses.title}>
                <Box fontFamily="Monospace">
                    Welcome to Scope
                </Box>
            </Typography>
        </Toolbar>
    </AppBar>
    )
}
