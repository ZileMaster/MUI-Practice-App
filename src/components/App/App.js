import React from "react";
import './App.css';
import SideMenu from "../SideMenu";
import {makeStyles, ThemeProvider} from '@material-ui/core';
import Header from "../Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import PageHeader from "../PageHeader";
import { createMuiTheme } from "@material-ui/core";
import Employees from "../Pages/Employees/Employees";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#333996",
        light: '#3c44b126'
      },
      secondary: {
        main: "#f83245",
        light: '#f8324526'
      },
      background: {
        default: "#f4f5fd"
      },
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:'translateZ(0)'
        }
      }
    },
    props:{
      MuiIconButton:{
        disableRipple:false
      }
    }
  })

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '15%',
        width: '100%'
    },
    appWhole: {
      minWidth: '330px'
    }
})

function App(){
    const classes = useStyles();

    return(
        <>   
            <ThemeProvider theme={theme} className={classes.appWhole}>
                <SideMenu />
                <div className={classes.appMain}>        
                    <Header />
                    <Employees />
                </div>
                <CssBaseline/>
            </ThemeProvider>
        </>
    );
}

export default App