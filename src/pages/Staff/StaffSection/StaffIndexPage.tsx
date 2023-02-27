import React, {useState} from 'react';
import {Box, Button, Grid} from "@mui/material";
import styled from "@emotion/styled";
import StaffTable from "./StaffTable/StaffTable";

// @ts-ignore
import {ReactComponent as StaffAddIcon} from "./../../../assets/svg/StaffAddIcon.svg";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import SearchComponent from "../../../components/reusedComponents/SearchComponent";


const StyledButton = styled(Button)({

    width: '200px',
    borderRadius: '5px',
    // border:'1px solid #2398AB',
    '&:hover': {
        color: "#fff",
        background: "primary.main"
    },
});


const movingButtons = [
    {buttonName: 'Аналитика',},
    {buttonName: 'Список',},

]


const StaffIndexPage = () => {

    const navigate = useNavigate()
    const [isActiveValue, setActiveValue] = useState('Список')

    const [searchedName,setSearchedName] = useState('')

    const formik = useFormik({
        initialValues: {
            search:''
        },

        onSubmit: values => {
            console.log("yes")
        },
    });


    return (
        <Box sx={{ backgroundColor: "primary.light", marginTop:"20px"}}>
            <Grid container spacing={1}>

                    {movingButtons.map(btn => {
                        return <Grid key={btn.buttonName} sx={{marginLeft: '10px'}}>
                            <StyledButton sx={{
                                color:
                                    isActiveValue === btn.buttonName
                                        ? "#fff"
                                        : "primary.main",
                                backgroundColor:
                                    isActiveValue === btn.buttonName
                                        ? "primary.main"
                                        : "#fff",
                            }} onClick={() => setActiveValue(btn.buttonName)}>{btn.buttonName}</StyledButton>
                        </Grid>
                    })}


                <Grid container xs={7} justifyContent="flex-end" >
                    {/*<Button sx={{backgroundColor: "#fff", }}><StaffAddIcon/></Button>*/}

                    {/*<StyledButton sx={{*/}
                    {/*    color: "#fff",*/}
                    {/*    backgroundColor: "primary.main", marginLeft:"10px"}}>Добавить сотрудника</StyledButton>*/}

                </Grid>
            </Grid>

            <Grid container
                  component="form"
                  sx={{border: '10px solid #fff', margin: '20px auto', backgroundColor: "#fff"}}
            >
                <Grid item xs={12}>

                    <form>
                        <SearchComponent formik={formik} placeholder={"Поиск по имени, фамилий, телефону"} searchedName = {searchedName}
                                         setSearchedName={setSearchedName}
                        />
                    </form>


                </Grid>
            </Grid>
            <StaffTable searchedName = {searchedName}/>


        </Box>
    );
};

export default StaffIndexPage;