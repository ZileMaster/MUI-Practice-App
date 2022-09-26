import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../PageHeader';
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone"
import { makeStyles, Paper } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
        pageContent: {
            margin: theme.spacing(5), 
            padding: theme.spacing(3), 
        }
}))

function Employees(){

    const classes = useStyle();

    return(
        <>
            <PageHeader 
            title="New Employee" 
            subtitle="Form with validation"
            icon={<PeopleOutlineTwoToneIcon fontSize="large"/>} />
            <div>
                <Paper className={classes.pageContent}>
                <EmployeeForm/>
                </Paper>
            </div>
        </>
    )
}

export default Employees