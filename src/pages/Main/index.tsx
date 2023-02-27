//library
import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//components
import Layout from "../../components/layouts";

//pages
import Home from "../Home";
import Error from "../Error";
import Profile from "../Profile";
import Users from "../Users";
import ComplaintsPage from "../Complaints";
import StaffPage from "../Staff";
import ComplaintsUser from "../Complaints/ComplaintsSection/ComplaintsUser";
import Edit from "../Staff/StaffSection/Edit";
import Worker from "../Staff/StaffSection/Worker";

// import Profile from "./Profile";
// import Users from "./Users";
// import ComplaintsPage from "./ComplaintsPage";
// import ComplaintUserPage from "../../components/pages/complaint/ComplaintUserPage";
// import ComplaintsUser from "./ComplaintsUser";
// import StaffPage from "./StaffPage";
// import Worker from "../../components/pages/staff/Worker";
// import Edit from "../../components/pages/staff/Edit";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="users/*" element={<Users />} />
          <Route path="complaints/" element={<ComplaintsPage />} />
          <Route path="complaints/user" element={<ComplaintsUser />} />
          <Route path="employees/" element={<StaffPage />} />
          <Route path="employees/one-worker" element={<Worker/>} />
          <Route path="employees/one-worker/edit" element={<Edit/>} />
        </Route>
      </Routes>
    </>
  );
};

export default Main;

/* <Route path="complaints/user*" element={<ComplaintsUser />} />
<Route path="employees/one-worker" element={<Worker />} />
<Route path="employees/one-worker/edit" element={<Edit />} /> */
