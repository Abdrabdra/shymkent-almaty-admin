import React from 'react';
import {Box, Button, Grid, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import {TextFieldComponent, TextFieldComponent3} from "./TextFields/TextFieldComponent";
import * as yup from 'yup';

import {useTypedSelector} from "../../../redux/store";
import {useFormik} from "formik";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
const StyledButton = styled(Button)({
    backgroundColor:"primary.light",
    color:"primary.main",
    fontWeight:"800",

});


const ENUM = {
    Dec:"12",
    Jan:"1",
    Feb:"2",
    Mar:"3",
    Apr:"4",
    May:"5",
    Jun:"6",
    Jul:"7",
    Aug:"8",
    Sep:"9",
    Oct:"10",
    Nov:"10",

}


const EditWorkerInfo = () => {
    const workerData = useTypedSelector(state=>state.staff)

    // console.log(workerData)
    // console.log("workerdata")

    const [date, setDate] = React.useState<Date | null>(null);

    const validationSchema = yup.object({
        firstName: yup
            .string()
            .required('Это обязательное поле!'),
        secondName: yup
            .string()
            .required('Это обязательное поле!'),
        iin: yup
            .string()
            .min(11, 'Данные написаны неправильно!')
            .max(13, 'Данные написаны неправильно!')
            .required('Это обязательное поле!'),
        date: yup
            .string()
            .required('Это обязательное поле!'),
    });

    // id: null,
    //     firstName: '',
    //     secondName: '',
    //     iin: '',
    //     position: '',
    //     date: '',
    //     phone: '',
    //     street: '',
    //     floor: null,
    //     building: '',
    //     apartment: '',
    //     index: ''

    const formik = useFormik({
        initialValues: {
            firstName: workerData.firstName,
            secondName: workerData.secondName,
            iin: workerData.iin,
            date: workerData.date,
            phone: workerData.phone,
            street: workerData.street,
            building: workerData.building,
            floor: workerData.floor,
            apartment: workerData.apartment,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    console.log(formik.values.date)

    console.log( typeof date)
    console.log( JSON.stringify(date))
    console.log("date")

    const convertDate = (date:string) => {
        return date.slice(0,10).split("").reverse().join("");
  //       let date2 = JSON.stringify(date)
  // const dateArr = []
  //     dateArr[0] = date2.slice(8,10)
  //       dateArr[1] = date2.slice(4,8)
  //       dateArr[1] = date2.slice(11,15)
  //       console.log(dateArr)
    }

    console.log(convertDate(JSON.stringify(date)))
    console.log("cdcd")

    // <TextField
    //     fullWidth
    //     id="email"
    //     name="email"
    //     label="Email"
    //     value={formik.values.email}
    //     onChange={formik.handleChange}
    //     error={formik.touched.email && Boolean(formik.errors.email)}
    //     helperText={formik.touched.email && formik.errors.email}
    // />

    return (
       <Box component={Paper} sx={{padding:"20px"}}>
           <Typography sx={{color:"primary.main", fontWeight:"500" }}>Информация о сотуднике</Typography>
           <hr/>
           <Grid container>
               <Grid item xs>
                   <Typography sx={{color:"primary.main", fontWeight:"800" }}>Личная информация</Typography>
                   <TextFieldComponent label={"Имя"} value={formik.values.firstName} id="firstName" name="firstName"
                                       formik={formik}
                                       error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                       helperText={formik.touched.firstName && formik.errors.firstName}
                   />
                   <TextFieldComponent label={"Фамилия"} value={formik.values.secondName} id="secondName" name="secondName"
                                       formik={formik}
                                       error={formik.touched.secondName && Boolean(formik.errors.secondName)}
                                       helperText={formik.touched.secondName && formik.errors.secondName}
                   />
                   <TextFieldComponent label={"ИИН"} value={formik.values.iin} id="iin" name="iin"
                                       formik={formik}
                                       error={formik.touched.iin && Boolean(formik.errors.iin)}
                                       helperText={formik.touched.iin && formik.errors.iin}
                   />


                   <Typography sx={{color:"primary.main", fontWeight:"500", marginTop:"10px" }}>Дата рождения</Typography>

                   <Grid container columnSpacing={1}>
                       <LocalizationProvider dateAdapter={AdapterDateFns}>
                           <DatePicker
                               value={date}
                               onChange={(newValue:any) => {
                                   setDate(newValue);
                               }}
                               renderInput={(params:any) => <TextField {...params}
                               sx = {{backgroundColor:"primary.light", color:"primary.main", input: { color: "primary.main", fontWeight:"600" } }}/>}
                           />
                       </LocalizationProvider>



                   </Grid>
                   <TextFieldComponent label={"Номер телефона"} value={formik.values.phone} id="phone" name="phone"
                                       formik={formik}
                                       error={formik.touched.phone && Boolean(formik.errors.phone)}
                                       helperText={formik.touched.phone && formik.errors.phone}
                   />

               </Grid>


               <Grid item xs>
                   <Typography sx={{color:"primary.main", fontWeight:"800" }}>Место проживания</Typography>
                   {/*<TextFieldComponent2 label={"Страна"} text={"Казахстан"}/>*/}
                   {/*<TextFieldComponent2 label={"Город"} text={"Алматы"}/>*/}
                   <TextFieldComponent label={"Улица"} value={formik.values.street} id="street" name="street"
                                       formik={formik}
                                       error={formik.touched.street && Boolean(formik.errors.street)}
                                       helperText={formik.touched.street && formik.errors.street}
                   />


                   <Grid container columnSpacing={3}>
                       <Grid item><TextFieldComponent3 label={"Дом"} value={formik.values.building} id="building" name="building"
                                                       formik={formik}
                                                       error={formik.touched.building && Boolean(formik.errors.building)}
                                                       helperText={formik.touched.building && formik.errors.building}/></Grid>
                       <Grid item><TextFieldComponent3 label={"Этаж"} value={formik.values.floor} id="floor" name="floor"
                                                       formik={formik}
                                                       error={formik.touched.floor && Boolean(formik.errors.floor)}
                                                       helperText={formik.touched.floor && formik.errors.floor}/></Grid>
                       <Grid item><TextFieldComponent3 label={"Квартира"} value={formik.values.apartment} id="apartment" name="apartment"
                                                       formik={formik}
                                                       error={formik.touched.apartment && Boolean(formik.errors.apartment)}
                                                       helperText={formik.touched.apartment && formik.errors.apartment}/></Grid>



                   </Grid>
                   {/*<TextFieldComponent label={"email"} text={"email@mail.ru"}/>*/}
               </Grid>
           </Grid>
       </Box>
    );
};

export default EditWorkerInfo;



