import React from 'react';
import {Box, Button, Divider, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "./../../../redux/store";
import complaint, {setButtonVisibility, setOneUserMessageVisibility} from "./../../../redux/store/reducers/complaint/complaint.slice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";

import TableBody from "@mui/material/TableBody";
import {
    StyledBodyCellFirstStaff, StyledBodyCellLastStaff, StyledBodyCellStaff,
    StyledBodyRowStaff,
    StyledHeadCellStaff,
    StyledHeadRowStaff
} from "./StaffTable/StyledHeadStaff";


const message = {
    id: 1,
    img: "",
    userName: "Asel",
    statusDescription: "была в сети 1 час назад",
    time: "12:32"
}

const StyledButton = styled(Button)({
    background:"#E4FFF9",
    color:"primary.main",
    height:"30px",
    margin:"10px auto"

});

function createData(
    user: string,
    reason: string,

) {
    return { user, reason};
}

const rows = [
    createData("Арман Есжанов", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Еркын Алимов", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Айнур Канатова", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Алмас Арманов", "Оскорбление пользователя не цензцрной лексикой"),
    createData("Айбек Омаров", "Оскорбление пользователя не цензцрной лексикой"),


];


const BlockedUsersList = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()


    const isPrevBtn = useTypedSelector(state => state.complaint.isShowPrevButton)

    const hideButton = () => {
        dispatch(setButtonVisibility(false));
        dispatch(setOneUserMessageVisibility(true))
    }

    return (

        <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding:"10px", height:"400px"}}>
            <Grid container alignItems="center">
                <Grid item xs={3.5}><Typography sx={{
                    color: "primary.main",
                    fontWeight: "800",
                }}>Список заблокированных</Typography>
                </Grid>
                {/*Эти строки кода нужны, я пока что убрал потому что нет апишки*/}
                {/*<Grid item xs={6}>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={2.5} >*/}
                {/*    */}
                {/*</Grid>*/}
            </Grid>
            <Box sx ={{display:"flex", justifyContent:"center"}}>
                <Typography sx={{alignItems:"center"}}>Пока что нет заблокированных пользователей</Typography>
            </Box>

   {/*Эти строки кода нужны, я пока что убрал потому что нет апишки*/}
            {/*<TableContainer component={Box} sx={{maxHeight:"350px"}}>*/}
            {/*    <Table*/}
            {/*        sx={{ minWidth: 450, boxShadow: "none", backgroundColor:"#fff" }}*/}
            {/*        aria-label="simple table"*/}
            {/*    >*/}
            {/*        <TableHead sx={{ position: "relative" }}>*/}
            {/*            <StyledHeadRowStaff>*/}
            {/*                <StyledHeadCellStaff>Пользователи</StyledHeadCellStaff>*/}
            {/*                <StyledHeadCellStaff>Причина блокирования</StyledHeadCellStaff>*/}
            {/*            </StyledHeadRowStaff>*/}
            {/*        </TableHead>*/}

            {/*        <TableBody>*/}
            {/*            {rows.map((row) => (*/}
            {/*                <StyledBodyRowStaff key={row.user}>*/}
            {/*                    <StyledBodyCellFirstStaff>{row.user}</StyledBodyCellFirstStaff>*/}
            {/*                    <StyledBodyCellStaff>{row.reason}</StyledBodyCellStaff>*/}
            {/*                    <StyledBodyCellLastStaff>*/}
            {/*                        <Button*/}
            {/*                            sx={{*/}
            {/*                                width: "140px",*/}
            {/*                                height: "40px",*/}
            {/*                                background: "#fff",*/}
            {/*                                borderRadius: "10px",*/}
            {/*                                "&:hover": {*/}
            {/*                                    background: "rgba(35, 152, 171, 1)",*/}
            {/*                                },*/}
            {/*                            }}*/}
            {/*                        >*/}
            {/*                            <Typography*/}
            {/*                                sx={{*/}
            {/*                                    color: "primary.main",*/}
            {/*                                    fontSize: "18px",*/}
            {/*                                    fontWeight: "700",*/}
            {/*                                    textTransform: "capitalize",*/}
            {/*                                }}*/}
            {/*                            >*/}
            {/*                                Подробнее*/}
            {/*                            </Typography>*/}
            {/*                        </Button>*/}
            {/*                    </StyledBodyCellLastStaff>*/}
            {/*                </StyledBodyRowStaff>*/}
            {/*            ))}*/}
            {/*        </TableBody>*/}
            {/*    </Table>*/}
            {/*</TableContainer>*/}

        </Box>
    );
};



export default BlockedUsersList;