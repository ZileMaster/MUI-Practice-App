import React, { useState, useEffect } from "react";
import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField, Radio } from "@material-ui/core";
import { useForm, Form } from "../../useForm";
import Controls from "../../controls/Controls";
import * as employeeService from "../../../Services/employeeService"
import { e } from "mathjs";

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
       
    const validate = () => {
        let temp = {}
        temp.full_Name = values1.full_Name?"" : "Required field!"
        temp.email = (/$|.+@.+..+/).test(values1.email)?"" : "Email not valid!"
        temp.mobile = values1.mobile.length>9?"" : "Minimum 10 numbers!"
        temp.departmentId = values1.departmentId.length!=0?"" : "Required field!"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x == "") //kul funkcija every()
    }

    const {
        values, 
        setValues, 
        errors, 
        serErrors,
        handleInputChange 
    } = useForm(initialFValues);
    
    const values1 = {...values}

    const handleSubmit = e => {
        e.preventDefault();
        if(validate())
        window.alert("testering!");
    }

    return(
            <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input 
                        name="fullName"
                        label="Full Name"
                        value={values1.full_Name}
                        onChange={handleInputChange}
                        error={errors.full_Name}//????
                        />
                        <Controls.Input
                            label="Email"
                            name="email"
                            value={values1.email}
                            onChange={handleInputChange}
                            error={errors.email}//????
                        />
                        <Controls.Input
                            label="Mobile"
                            name="mobile"
                            value={values1.mobile}
                            onChange={handleInputChange}
                            error={errors.mobile}//????
                        />
                        <Controls.Input
                            label="City"
                            name="city"
                            value={values1.city}
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
                            <Controls.DatePicker 
                                name="hireDate"
                                label="Hire date"
                                value={values1.hireDate}
                                onChange={handleInputChange}
                            />
                            <Controls.Checkbox
                                name="isPermanent"
                                label="Permanent Employee"
                                value={values1.isPermanent}
                                onChange={handleInputChange}
                            />
                            <div>
                                <Controls.Button
                                    type="submit"
                                    text="Submit"
                                />
                                <Controls.Button
                                    color="secondary"
                                    text="Reset"
                                />

                            </div>
                    </Grid>
                </Grid> 
            </Form>
    )
}

export default EmployeeForm;