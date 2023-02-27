import { createSlice } from "@reduxjs/toolkit";
import { ActionsEnum } from "../../enum";
import { login, logout } from "./auth.action";

interface IInitState {
  isAuth: boolean;
  error: unknown;
  status: ActionsEnum;
}

const initialState: IInitState = {
  isAuth: true,
  error: null,
  status: ActionsEnum.IDLE,
};

const authReducer = createSlice({
  name: "auth",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = ActionsEnum.LOADING;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = ActionsEnum.SUCCESS;
        state.isAuth = true;
      })
      .addCase(login.rejected, (state, { error }) => {
        state.status = ActionsEnum.ERROR;
        state.error = error;
      })
      // .addCase(checkAuth.fulfilled, (state, { payload }) => {
      //   state.
      // })
      .addCase(logout.fulfilled, () => {
        return initialState;
      });
  },
});
export default authReducer.reducer;
