import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import {
  MainButton,
  SecondaryButton,
  WarningButton,
} from "../../../../components/styled-components/StyledButton";
import { PaperContainer, ProfileImageBox } from "./style";

// icons
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LeftSideBlock = () => {
  return (
    <Grid item xs={1} sx={{ height: "calc(100vh - 215px)" }}>
      <PaperContainer>
        <Stack>
          <ProfileImageBox />
          <Typography
            sx={{ fontSize: "28px", fontWeight: 600, color: "#2398AB" }}
          >
            Инсар Еркинбаевs
          </Typography>
          <Box sx={{ width: "100%" }}>
            <MainButton
              startIcon={<PermIdentityOutlinedIcon />}
              sx={{ mb: "20px" }}
            >
              Аккаунт
            </MainButton>
            <SecondaryButton startIcon={<LockOutlinedIcon />}>
              Права доступа
            </SecondaryButton>
          </Box>
        </Stack>
        <Box>
          <WarningButton sx={{ justifyContent: "center" }}>Выйти</WarningButton>
        </Box>
      </PaperContainer>
    </Grid>
  );
};

export default LeftSideBlock;
