import React from "react";
import {Box, InputAdornment, TextField, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface PropsType {
    label:string,
    id?:string,
    value?:string | number | null,
    name:string,
    formik:any,
    error:any,
    helperText:any,


}

export const TextFieldComponent:React.FC<PropsType> = ({value,label,id,name,formik,error,helperText}) => {
    return (
        <Box sx={{marginTop:"10px"}}>
            <Typography sx={{color:"primary.main", fontWeight:"500" }}>{label}</Typography>
            <TextField
                id={id}
                name={name}
                value={value}
                size={"small"}
                onChange={formik.handleChange}
                sx={{backgroundColor:"primary.light", color:"primary.main", input: { color: "primary.main", fontWeight:"600" },
                    width:"250px"
                }}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}


            />
        </Box>

    )
}

export interface PropsType2 {
    label:string,
    text:string,

}


export const TextFieldComponent3:React.FC<PropsType> = ({value,label,id,name,formik,error,helperText}) => {
    return (
        <Box sx={{marginTop:"10px"}}>
            <Typography sx={{color:"primary.main", fontWeight:"500" }}>{label}</Typography>
            <TextField
                size={"medium"}
                sx={{backgroundColor:"primary.light", color:"primary.main", input: { color: "primary.main", fontWeight:"600" }, maxWidth:"80px" }}
                id={id}
                name={name}
                value={value}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}

            />
        </Box>

    )
}


