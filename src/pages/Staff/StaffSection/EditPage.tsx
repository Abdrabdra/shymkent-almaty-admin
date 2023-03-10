import React from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import UsersInfo from "./UsersInfo";
import BlockedUsersList from "./BlockedUsersList";
import WorkerHistory from "./WorkerHistory";
import EditMainBlock from "./EditMainBlock";
import EditWorkerInfo from "./EditWorkerInfo";


const StyledButton = styled(Button)({
    backgroundColor:"#fff",
    color:"primary.main",

});

const EditPage = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{paddingTop: '20px', backgroundColor: '#E4FFF9'}}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <StyledButton onClick={()=>navigate('/app/employees/one-worker')} startIcon={<ChevronLeftIcon sx={{color:"primary.main"
                }}/>}>
                    <Typography sx = {{fontWeight:"800", textTransform:'capitalize'}}>Назад</Typography>
                </StyledButton>
                <Button sx={{backgroundColor: "primary.main", color:"#fff" }}>Сохранить</Button>
            </Box>

            {/*<UsersInfo/>*/}
            <Grid container sx={{marginTop:"20px"}} columnSpacing={2}>
                <Grid item xs = {4}><EditMainBlock/></Grid>
                <Grid item xs = {8}><EditWorkerInfo/></Grid>
            </Grid>








        </Box>
    );
};

export default EditPage;