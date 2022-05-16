import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";

import '../../assets/common.scss';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
        fontFamily: "Nunito Sans",
        fontWeight: 800
    },

    button: {
        fontFamily: "Nunito Sans",
        fontWeight: 600,
        fontSize: 17,
        textTransform: "unset",
        verticalAlign: "middle"
    }
}));


fontawesome.library.add(faMoon, faSun);

export default function Header({onClick, label}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static" color={'transparent'}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Where in the world?
                    </Typography>
                    <Button color="inherit" className={classes.button}
                            onClick={onClick}>
                        {
                            label === "light" ?
                                (
                                    <React.Fragment>
                                        <FontAwesomeIcon icon="fa-solid fa-moon"
                                                         style={{marginRight: '0.3em', fontSize: '20px'}}/>
                                        <span>Dark Mode</span>
                                    </React.Fragment>
                                )
                                : (
                                    <React.Fragment>
                                        <FontAwesomeIcon icon="fa-solid fa-sun"
                                                         style={{marginRight: '0.3em', fontSize: '20px'}}/>
                                        <span>Light Mode</span>
                                    </React.Fragment>
                                )
                        }
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
