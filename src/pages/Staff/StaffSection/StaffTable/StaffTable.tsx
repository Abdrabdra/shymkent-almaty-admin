import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import { Box, Button, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOneStaff } from "../../../../redux/store/reducers/staff/staff.slice";
import React from "react";
import { useGetStaffQuery } from "../../../../redux/store/rtk-api/staff-rtk/staffEndpoints";
import { IStaffResponse } from "../../../../redux/store/rtk-api/staff-rtk/staff.type";
import StaffTableInfo from "../StaffTableInfo";
import {
  StyledHeadCell,
  StyledHeadRow,
} from "../../../Users/MainUser/ListUser/ListUser.style";

function createData(
  name: string,
  phone: string,
  bin: string,
  position: string,
  workerStatus: string,
  email: string,
  date: string
) {
  return { name, phone, bin, position, workerStatus, email, date };
}

const rows = [
  createData(
    "Досбол Акынов",
    "+7 707 432 21 12",
    "020306600213",
    "Админинистратор",
    "Активный",
    "dosbol@mail.ru",
    "21.04.1998"
  ),
  createData(
    "Даулет Жаксыбек",
    "+7 777 324 54 23",
    "120909500436",
    "Админинистратор",
    "Женат",
    "daulet@mail.ru",
    "12.12.1990"
  ),
  createData(
    "Бакыт Кайратов",
    "+7 707 546 74 22",
    "010201502914",
    "Админинистратор",
    "Женат",
    "bakit@mail.ru",
    "11.09.1979"
  ),
  createData(
    "Улжан Амангелды",
    "+7 700 123 44 12",
    "110406320100",
    "Админинистратор",
    "Активный",
    "ulzhan@mail.ru",
    "28.04.1987"
  ),
];

interface Props {
  searchedName: string;
}

const StaffTable: React.FC<Props> = ({ searchedName }) => {
  const {
    data: workers,
    isLoading,
    isError,
    isSuccess,
  } = useGetStaffQuery("staff");
  console.log(workers);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <TableContainer component={Box}>
      <Table
        sx={{ minWidth: 650, boxShadow: "none" }}
        aria-label="simple table"
      >
        <TableHead sx={{ position: "relative" }}>
          <StyledHeadRow>
            <StyledHeadCell>Сотрудник</StyledHeadCell>
            <StyledHeadCell>Телефон</StyledHeadCell>
            <StyledHeadCell>ИИН</StyledHeadCell>
            <StyledHeadCell>Уровень доступа</StyledHeadCell>
          </StyledHeadRow>
          <Divider
            sx={{
              ml: "17px",
              position: "absolute",
              width: "calc(100% - 32px)",
              backgroundColor: "primary.main",
            }}
          />
        </TableHead>

        <TableBody>
          {workers &&
            workers.map((worker: IStaffResponse, ind) => {
              if (
                searchedName &&
                worker.firstName
                  .toLowerCase()
                  .includes(searchedName.toLowerCase())
              ) {
                return <StaffTableInfo ind={ind} worker={worker} />;
              } else if (!searchedName) {
                return <StaffTableInfo ind={ind} worker={worker} />;
              } else return;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StaffTable;
