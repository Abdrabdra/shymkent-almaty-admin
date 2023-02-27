import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ComplaintUserMessages from "../../Complaints/ComplaintsSection/ComplaintUserMessages";
import ComplaintUsersInfo from "../../Complaints/ComplaintsSection/ComplaintUsersInfo";
import VisitDiagram from "../../Complaints/ComplaintsSection/VisitDiagram";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import UserInfo from "./UserInfo";

const OneUser = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#E4FFF9" }}>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => navigate(-1)}
        startIcon={<ChevronLeftIcon />}
        sx={{ width: "130px" }}
      >
        Назад
      </Button>
      <UserInfo />
      {/* <ComplaintUsersInfo /> */}
      <Grid container>
        <Grid item xs={7}>
          <ComplaintUserMessages />
        </Grid>
        <Grid item xs={5}>
          <VisitDiagram />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OneUser;
