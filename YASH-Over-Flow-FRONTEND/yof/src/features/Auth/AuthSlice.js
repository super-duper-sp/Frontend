/*
  Created on - 04-04-2024
  Created By - yash.raj
  Project - YOTASecurityPOC
  IDE used - IntelliJ IDEA
  Path of this file -
 */

  import {createSlice} from "@reduxjs/toolkit";
  import {login, logout, register, syncUserAuthData} from "../Auth/AuthAction";
  
  const initialState = {
      userData: [],
      loading: false,
      error: null,
      success: false,
      message: null,
  }
  
  const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
          clearMessage(state) {
              state.userData = [];
              state.message = null;
              state.error = null;
          }
      },
      extraReducers: (builder) => {
          builder.addCase(login.pending, (state) => {
              state.loading = true;
              state.userData = [];
              state.success = false;
              state.error = null;
              state.message = null;
          });
          builder.addCase(login.fulfilled, (state, action) => {
              state.loading = false;
              state.userData = action.payload;
              state.success = true;
              state.error = null;
          });
          builder.addCase(login.rejected, (state, action) => {
              state.loading = false;
              state.userData = [];
              state.success = false;
              state.error = action.payload;
          });
          builder.addCase(register.pending, (state) => {
              state.loading = true;
              state.userData = [];
              state.success = false;
              state.error = null;
              state.message = null;
          });
          builder.addCase(register.fulfilled, (state, action) => {
              state.loading = false;
              state.message = action.payload;
              state.success = true;
              state.error = null;
          });
          builder.addCase(register.rejected, (state, action) => {
              state.loading = false;
              state.message = action.payload;
              state.success = false;
              state.error = action.payload;
          });
          builder.addCase(syncUserAuthData.pending, (state) => {
              state.loading = true;
              state.userData = [];
              state.success = false;
              state.error = null;
              state.message = null;
          });
          builder.addCase(syncUserAuthData.fulfilled, (state, action) => {
              state.loading = false;
              state.userData = action.payload;
              state.success = true;
              state.error = null;
              state.message = null;
          });
          builder.addCase(syncUserAuthData.rejected, (state, action) => {
              state.loading = false;
              state.userData = [];
              state.success = false;
              state.error = action.payload;
          });
          builder.addCase(logout.pending, (state) => {
              state.loading = true;
              state.success = false;
              state.error = null;
              state.message = null;
          });
          builder.addCase(logout.fulfilled, (state, action) => {
              state.loading = false;
              state.userData = [];
              state.success = true;
              state.error = null;
          });
          builder.addCase(logout.rejected, (state, action) => {
              state.loading = false;
              state.userData = [];
              state.success = false;
              state.error = action.payload;
          });
      }
  });
  
  export const {clearMessage} = authSlice.actions;
  export default authSlice.reducer;
  