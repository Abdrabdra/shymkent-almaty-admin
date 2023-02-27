import React from 'react';
import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
// @ts-ignore
import { ReactComponent as UserPhoto } from "./../../../assets/svg/Vectorusercomplaintsava.svg";
import ComplaintDialogWindow from "./ComplaintDialogWindow";

const StyledBoldTypography = styled(Typography)({
    fontSize:'15px',
    fontWeight:'800',
    color:"primary.main",

});
const StyledTypography = styled(Typography)({
    fontSize:'13px',
    color:"primary.main",

});

const MyStyledButton = styled(Button)({
    width:"120px",
    textTransform:"capitalize",
    fontSize:"12px"
});

const texts = [
    {
        firstText:"Номер телефона",
        description:"870748393423"
    },
    {
        firstText:"Дата рожения",
        description:"29.01.1999"
    },
    {
        firstText:"Почта",
        description:"test@mail.com"
    },
    {
        firstText:"статус",
        description:"Активный"
    },
    {
        firstText:"религия",
        description:"ислам"
    },
    ]

const ComplaintUsersInfo = () => {

    return (
        <>
            <Box sx = {{padding:"15px", backgroundColor:"#fff", margin:"20px auto"}}>
                <Grid container>
                    <Grid container xs = {6}>
                        <Grid sx={{backgroundColor:"#E2E2E2"}}><UserPhoto style={{width:60,height:60, color:"#fff", border:"30px solid #E2E2E2"}}/></Grid>
                        <Grid sx = {{margin: '5px 20px'}} >
                            <StyledTypography>Информация на пользователя</StyledTypography>
                            <Typography sx={{margin:"10px auto", fontSize:'20px', color:"primary.main", fontWeight:'800'}}>A. Адильбекович</Typography>
                            <Stack direction={"row"} spacing={2} sx={{marginTop:"20px"}}>
                                <MyStyledButton sx={{color:"#FD4444", backgroundColor:"#FFEFEF"}}>Заблокировать</MyStyledButton>
                                <MyStyledButton sx={{color:"primary.main", backgroundColor:"primary.light"}}>Отклонить</MyStyledButton>

                                {/*<ComplaintDialogWindow isWindowOpen={true} description={"sdc ddwdwd dwdwd dwdwdwd dwdwdwdw dwdwdw ncbjeb mwekldm nkewj"} title={"csdc"} />*/}

                            </Stack>

                        </Grid>
                    </Grid>

                    <Grid container xs = {6}>
                        {texts.map(text=><InfoBlock description={text.description} textData={text.firstText}/>)}
                    </Grid>

                </Grid>

            </Box>

        </>

    );
};

type PropsType2 = {
    textData:string,
    description:string
}

const InfoBlock:React.FC<PropsType2> = React.memo(({textData, description}) => {
    return (
        <Grid item xs={4}>
            <StyledTypography sx = {{fontSize:'13px', color:"primary.main",}}>{textData}</StyledTypography>
            <StyledBoldTypography sx = {{fontSize:'15px', fontWeight:'800', color:"primary.main",}}>{description}</StyledBoldTypography>
        </Grid>
    )
})


export default ComplaintUsersInfo;