import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createTheme";

const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor:'#fdfdff'
    },
    pageHeader: {
        padding:theme.spacing(4),
        display:'flex', 
        marginBottom:theme.spacing(3),
    }, 
    pageIcon:{
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity: '0.6'
        }
    }
}))

function PageHeader(props){

    const classes = useStyles();
    const { title, subtitle, icon } = props;

    return(
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography 
                     variant="h6"
                     component="div">
                        {title}
                     </Typography>
                     <Typography 
                        variant="subtitle2"
                        component="div">
                        {subtitle}
                     </Typography>
                </div>
            </div>
        </Paper>   
    )

}

export default PageHeader;