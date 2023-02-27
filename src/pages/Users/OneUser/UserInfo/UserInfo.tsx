import { Box, Grid } from "@mui/material";

const UserInfo = () => {
    return (
        <Grid container item sx={{ height: "200px", borderRadius: "10px", p: "20px", backgroundColor: "#FFF", display: "flex" }}>
            <Box sx={{ backgroundColor: 'red', width: "100px", height: "100px" }}></Box>
            <Box sx={{ backgroundColor: 'red', width: "100px", height: "100px" }}></Box>
            <Box sx={{ backgroundColor: 'red', width: "100px", height: "100px" }}></Box>
        </Grid>
    );
}

export default UserInfo;