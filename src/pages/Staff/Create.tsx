import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Poster } from "../mainStyle";
// import axios from "../../../api/axios";

const initialValues = {
  to: null,
  from: null,
  title: null,
  price: null,
  picture: null,
};

const Create = () => {
  const navigate = useNavigate();
  const [hotel, setHotel] = React.useState(initialValues);

  const handleAddImage = (event: any) => {
    const input = event.target;
    const file = input.files[0];
    setHotel((state) => ({ ...state, picture: file }));
  };

  const handleChange = (e: any, type: any) => {
    if (type === "title") {
      setHotel((state) => ({ ...state, title: e.target.value }));
    } else if (type === "price") {
      setHotel((state) => ({ ...state, price: e.target.value }));
    } else if (type === "to") {
      setHotel((state) => ({ ...state, to: e.target.value }));
    } else if (type === "from") {
      setHotel((state) => ({ ...state, from: e.target.value }));
    }
  };

  const [errMsg, setErrMsg] = useState<any>("");
  const [success, setSuccess] = useState<any>("");

  const create = async (enterdata: any) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/hotel/create-hotel",
        enterdata
      );
      setSuccess(true);
    } catch (err) {
      setErrMsg("Ошибка повторите еще раз");
    }
  };

  const handleSubmit = () => {
    const { title, price, picture, to, from }: any = hotel;
    const formData = new FormData();

    if (title !== null) {
      formData.append("title", title);
    }
    if (price !== null) {
      formData.append("price", price);
    }
    if (to !== null) {
      formData.append("to", to);
    }
    if (from !== null) {
      formData.append("from", from);
    }
    formData.append("picture", picture);
    console.log(formData);
    create(formData);
  };

  return (
    <Paper sx={{ p: "30px" }}>
      <Button onClick={() => navigate("/admin")}>Назад</Button>
      <Poster>Создать Объявление</Poster>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item sx={{ width: "100%" }}>
          <FormControl fullWidth sx={{ mb: "30px" }}>
            <TextField
              value={hotel.title}
              label="title"
              onChange={(e) => handleChange(e, "title")}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: "30px" }}>
            <TextField
              value={hotel.price}
              label="price"
              onChange={(e) => handleChange(e, "price")}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: "30px" }}>
            <TextField
              value={hotel.from}
              label="Откуда"
              onChange={(e) => handleChange(e, "from")}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: "30px" }}>
            <TextField
              value={hotel.to}
              label="Куда"
              onChange={(e) => handleChange(e, "to")}
            />
          </FormControl>

          <Stack sx={{ mb: "20px" }}>
            <label>Картинка</label>
            <input type="file" onChange={(e) => handleAddImage(e)} />
          </Stack>
          <Box sx={{ width: "150px" }}>
            <Button onClick={handleSubmit} fullWidth variant="contained">
              Добавить
            </Button>
            {success && (
              <Typography color="green">Успешно добавлено</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Create;
