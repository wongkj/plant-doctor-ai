import React, { useState } from 'react';
import Navbar from './NavBar/NavBar';
import {
    makeStyles,
    Container,
    useMediaQuery,
    useTheme
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    navbarSpacing: {
        marginTop: '65px'
    },
    page: {
        height: '100vh',
        background: '#ffffec'
    }
    // page: {
    //     marginLeft: (isMatch) => {
    //         if (isMatch == false){
    //             return '300px'
    //         }
    //     },
    //     marginRight: (isMatch) => {
    //         if (isMatch == false){
    //             return '300px'
    //         }
    //     }        
    // }
}))

const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div className={classes.page}>
            <Navbar />
            <div className={classes.navbarSpacing} />
            {children}            
        </div>
      );
}


export default Layout;