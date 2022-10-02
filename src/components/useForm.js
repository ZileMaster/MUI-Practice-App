import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues){

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return(
        values, 
        setValues,
        errors, 
        setErrors,
        handleInputChange
    );
}

const useStyle = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root' : {
            width: '80%', 
            margin:theme.spacing(1),
        }
    }
}))

export function Form(props){
    const classes = useStyle();
    const {children,...other} = props;
    return(
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
