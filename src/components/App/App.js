import React from "react";
import './App.css';
import SideMenu from "../SideMenu";
import {makeStyles} from '@material-ui/core';
import Header from "../Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import PageHeader from "../PageHeader";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone"

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})

function App(){
    const classes = useStyles();

    return(
        <>   
            
            <SideMenu />
            <div className={classes.appMain}>        
                <Header />
                <PageHeader 
                 title="Page Header" 
                 subtitle="Page description"
                 icon={<PeopleOutlineTwoToneIcon fontSize="large"/>} />
            </div>
            <CssBaseline/>

        </>
    );
}

export default App