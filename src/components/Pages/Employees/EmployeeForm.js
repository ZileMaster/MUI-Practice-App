import React, { useState, useEffect } from "react";
import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField, Radio } from "@material-ui/core";
import { useForm, Form } from "../../useForm";
import Controls from "../../controls/Controls";
import * as employeeService from "../../../Services/employeeService"

const genderItems = [
    {id: 'male', title:'Male'},
    {id: 'female', title:'Female'},
]

const initialFValues = {
    id: 0, 
    full_Name: '',
    email: '', 
    mobile: '',
    city: '', 
    gender: 'male',
    departmentId: '',
    hireDate: new Date(), 
    isPermanent: false,
}

function EmployeeForm(){
       
    const {
        values, 
        setValues, 
        handleInputChange 
    } = useForm(initialFValues);
    
    const values1 = {...values}

    return(
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input 
                        name="fullName"
                        label="Full Name"
                        value={values1.full_Name}
                        onChange={handleInputChange}
                        />
                        <Controls.Input
                            label="Email"
                            name="email"
                            value={values1.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup 
                            name="gender"
                            label="Gender"
                            value={values1.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                            />         
                            <Controls.Select
                            name="departmentId"
                            label="Department"
                            value={values1.departmentId}
                            onChange={handleInputChange}
                            options={employeeService.getDepartmentCollection()}
                            />  
                    </Grid>
                </Grid> 
            </Form>
    )
}

export default EmployeeForm;