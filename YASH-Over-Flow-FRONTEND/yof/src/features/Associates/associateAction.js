import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";

export const fetchAllAssociates = createAsyncThunk(
  "associates/fetchAllAssociates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        AXIOS_BASE_URL + "/profiles"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchAllPendingAssociates = createAsyncThunk(
//   "associates/fetchPendingAssociates",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + "/users/get/all-pending/associates"
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const approvePendingAssociate = createAsyncThunk(
//   "associates/approvePendingAssociate",
//   async (email, { rejectWithValue }) => {
//     try {
//       const config = {
//         params: {
//           email: email,
//         },
//       };
//       const response = await axios.put(
//         AXIOS_BASE_URL + "/users/approve/associate",
//         null,
//         config
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const declinePendingAssociate = createAsyncThunk(
//   "associates/declinePendingAssociate",
//   async (email, { rejectWithValue }) => {
//     try {
//       const param = {
//         params: {
//           email: email,
//         },
//       };
//       const response = await axios.put(
//         AXIOS_BASE_URL + "/users/decline/associate",
//         null,
//         param
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchAllAssociatesByStatus = createAsyncThunk(
//   "associates/fetchAllAssociatesByStatus",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + "/users/all-associates-status",
//         {
//           params: {
//             status: "APPROVED",
//           },
//         }
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchRegisteredAssociates = createAsyncThunk(
//   "associates/fetchRegisteredAssociates",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + "/users/get/all-registered/associates?trainingId=1"
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const fetchTestByTestId = createAsyncThunk(
//   "associates/fetchTestByTestId",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + `/tests/testPaper?id=${id}`
//       );
//       // {
//       //   params: {
//       //     id: 1,
//       //   },
//       // }
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchAllAssociatesTrainingsByEmailId = createAsyncThunk(
//   "associates/fetchAllAssociatesTrainingsByEmailId",
//   async (email, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + `/associate/assigned?email=${email}`
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchAllAssociatesTestByEmailId = createAsyncThunk(
//   "associates/fetchAllAssociatesTestByEmailId",
//   async (email, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + `/associate/assignedTest?email=${email}`
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const profileDetail = createAsyncThunk(
//   "associates/profileDetail",
//   async (email, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         AXIOS_BASE_URL + `/associate/profile-details`,
//         {
//           params: {
//             email: email,
//           },
//         }
//       );
     
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const changePasswordDetails = createAsyncThunk(
//   "associates/changePasswordDetails",
//   async (changePasswordDetails, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         AXIOS_BASE_URL + `/changePassword`,
//         changePasswordDetails
//       );
   
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
