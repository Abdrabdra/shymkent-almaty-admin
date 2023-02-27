// library
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HeaderBlock, Poster } from "../mainStyle";

//pages
import ProfileSection from "./ProfileSection";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Профиль</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<ProfileSection />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
