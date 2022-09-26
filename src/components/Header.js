import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    root: {
        backgroundColor : '#fff',
        transform: 'translateZ(0)'
    },
    searchInput: {
        opacity:'0.6', 
        padding: '0px 8px', 
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: '#f2f2f2',
        }
    }, 
    btnLabel: {
        color: 'black',
    }, 
})

function Header() {

    const classes = useStyles();

    return(
        <>
            <div>
                <AppBar position="static" className={classes.root}>
                    <Toolbar>
                        <Grid container 
                        alignItems="center">
                            <Grid itemRef="">
                                <InputBase 
                                placeholder="Search topics"
                                className={classes.searchInput}
                                startAdornment={<SearchIcon fontSize="small"/>} />
                            </Grid>
                            <Grid item sm></Grid>
                            <Grid item>
                                <IconButton classes={{label:classes.btnLabel}}>
                                    <Badge badgeContent={4} color="secondary">
                                        <NotificationsNoneIcon fontSize="small" />
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge badgeContent={3} color="primary">
                                        <ChatBubbleOutlineIcon fontSize="small" />
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <PowerSettingsNewIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );

}

export default Header