/*
  Created on - 03-04-2024
  Created By - yash.raj
  Project - YOTASecurityPOC
  IDE used - IntelliJ IDEA
  Path of this file -
 */
  import {createAsyncThunk} from "@reduxjs/toolkit";
  import axios from "axios";
  import {AXIOS_BASE_URL, TOKEN_KEY} from "../../constants/helperConstants";
  import {getDecryption, getEncryption} from "../../Security/crypto/EncryptionDecryption";
  import {
      getEncryptionKeyFromToken,
      getFullNameFromToken,
      getRoleFromToken,
      getUserNameFromToken,
      isTokenExpired
  } from "../../Security/jwt/JwtService";
  
  export const login = createAsyncThunk(
      "auth/login",
      async (loginData, {rejectWithValue}) => {
  
          try {
              console.log("Trying logging in...");
  
              const response = await axios.post(
                  AXIOS_BASE_URL + "/login",
                  loginData
              );
  
              const {token} = response.data;
              const {status} = response.data;
              if (token && status === 'SUCCESS') {
                  const encryptedToken = getEncryption(token);
                  localStorage.setItem(TOKEN_KEY, encryptedToken);
  
                  return {
                      status: status,
                      message: response.data.message,
                      token: encryptedToken,
                      userRole: getRoleFromToken(encryptedToken),
                      email: getUserNameFromToken(encryptedToken),
                      fullName: getFullNameFromToken(encryptedToken),
                      encryptionKey: getEncryptionKeyFromToken(token)
                  };
              } else {
                  return {
                      status: status,
                      message: response.data.message
                  };
              }
          } catch (error) {
              return rejectWithValue(error.message);
          }
      }
  );
  
  export const syncUserAuthData = createAsyncThunk(
      "auth/syncData",
      async (_, {rejectWithValue}) => {
  
          try {
              console.log("Syncing user data...");
  
              const encryptedToken = localStorage.getItem(TOKEN_KEY);
              if (encryptedToken && !isTokenExpired(encryptedToken)) {
                  let token = getDecryption(encryptedToken);
  
                  return {
                      status: null,
                      message: null,
                      token: encryptedToken,
                      userRole: getRoleFromToken(encryptedToken),
                      email: getUserNameFromToken(encryptedToken),
                      fullName: getFullNameFromToken(encryptedToken),
                      encryptionKey: getEncryptionKeyFromToken(token)
                  };
              } else {
                  throw new Error("Unable to sync Data, Please re-login");
              }
          } catch (error) {
              return rejectWithValue(error.message);
          }
      }
  );
  
  export const logout = createAsyncThunk(
      "auth/logout",
      async (_, {rejectWithValue}) => {
  
          try {
              console.log("Logging out...");
              localStorage.removeItem(TOKEN_KEY);
          } catch (error) {
              return rejectWithValue(error.message);
          }
      }
  );
  
  export const register = createAsyncThunk(
      "auth/register",
      async (formData, {rejectWithValue}) => {
  
          try {
              console.log("Registering new user...");
  
              const response = await axios.post(
                  AXIOS_BASE_URL + "/register",
                  formData
              );
  
              return response.data;
          } catch (error) {
              return rejectWithValue(error.response.data);
          }
      }
  );
  