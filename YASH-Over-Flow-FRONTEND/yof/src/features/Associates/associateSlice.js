import {createSlice} from "@reduxjs/toolkit";
import {fetchAllAssociates} from "../Associates/associateAction";

const initialState = {
    associates: [],
    loading: false,
    error: null,
    success: false,
    test:{},
  };
  
  const associateSlice = createSlice({
    name: "associates",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //fetching all associates
      builder.addCase(fetchAllAssociates.pending, (state) => {
        state.loading = true;
        state.associates = [];
        state.success = false;
        state.error = null;
      });
      builder.addCase(fetchAllAssociates.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.associates = action.payload;
      });
      builder.addCase(fetchAllAssociates.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.associates = [];
      });
    //   //fetching all pending associates
    //   builder
    //     .addCase(fetchAllPendingAssociates.pending, (state) => {
    //       state.loading = true;
    //       state.success = false;
    //       state.error = null;
    //       state.associates = [];
    //     })
    //     .addCase(fetchAllPendingAssociates.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.success = true;
    //       state.associates = action.payload;
    //     })
    //     .addCase(fetchAllPendingAssociates.rejected, (state, action) => {
    //       state.loading = false;
    //       state.success = false;
    //       state.error = action.payload;
    //       state.associates = [];
    //     });
    //   //approve pending associate
    //   builder
    //     .addCase(approvePendingAssociate.pending, (state) => {
    //       state.loading = true;
    //       state.success = false;
    //       state.error = null;
    //     })
    //     .addCase(approvePendingAssociate.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.success = true;
    //       state.error = null;
    //       let index = state.associates.findIndex(
    //         (associate) => associate.emailAdd === action.meta.arg
    //       );
    //       state.associates.splice(index, 1);
    //     })
    //     .addCase(approvePendingAssociate.rejected, (state, action) => {
    //       state.loading = false;
    //       state.success = false;
    //       state.error = action.payload;
    //     });
    //   //decline pending associate
    //   builder
    //     .addCase(declinePendingAssociate.pending, (state) => {
    //       state.loading = true;
    //       state.success = false;
    //       state.error = null;
    //     })
    //     .addCase(declinePendingAssociate.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.success = true;
    //       state.error = null;
    //       let index = state.associates.findIndex(
    //         (associate) => associate.emailAdd === action.meta.arg
    //       );
    //       state.associates.splice(index, 1);
    //     })
    //     .addCase(declinePendingAssociate.rejected, (state, action) => {
    //       state.loading = false;
    //       state.success = false;
    //       state.error = action.payload;
    //     });
    //   //fetching all approved associates
    //   builder
    //     .addCase(fetchAllAssociatesByStatus.pending, (state) => {
    //       state.loading = true;
    //       state.success = false;
    //       state.error = null;
    //       state.associates = [];
    //     })
    //     .addCase(fetchAllAssociatesByStatus.fulfilled, (state, action) => {
    //       state.loading = false;
    //       state.success = true;
    //       state.associates = action.payload;
    //     })
    //     .addCase(fetchAllAssociatesByStatus.rejected, (state, action) => {
    //       state.loading = false;
    //       state.success = false;
    //       state.error = action.payload;
    //       state.associates = [];
    //     });
    //   //fetching test
    //   builder.addCase(fetchTestByTestId.pending, (state) => {
    //     state.loading = true;
    //     state.success = false;
    //     state.error = null;
    //     state.test = null;
    //   });
    //   builder.addCase(fetchTestByTestId.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.test = action.payload;
    //   });
    //   builder.addCase(fetchTestByTestId.rejected, (state, action) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.error = action.payload;
    //     state.test = null;
    //   });
  
    //   //fetching all training registered associates
    //   builder.addCase(fetchRegisteredAssociates.pending, (state) => {
    //     state.loading = true;
    //     state.associates = [];
    //     state.success = false;
    //     state.error = null;
    //   });
    //   builder.addCase(fetchRegisteredAssociates.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.error = null;
    //     state.associates = action.payload;
    //   });
    //   builder.addCase(fetchRegisteredAssociates.rejected, (state, action) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.error = action.payload;
    //     state.associates = [];
    //   });
  
    //   builder.addCase(fetchAllAssociatesTrainingsByEmailId.pending, (state) => {
    //     state.loading = true;
    //     state.associates = [];
    //     state.success = false;
    //     state.error = null;
    //   });
    //   builder.addCase(
    //     fetchAllAssociatesTrainingsByEmailId.fulfilled,
    //     (state, action) => {
    //       state.loading = false;
    //       state.success = true;
    //       state.error = null;
    //       state.associates = action.payload;
    //     }
    //   );
    //   builder.addCase(
    //     fetchAllAssociatesTrainingsByEmailId.rejected,
    //     (state, action) => {
    //       state.loading = false;
    //       state.success = false;
    //       state.error = action.payload;
    //       state.associates = [];
    //     }
    //   );
  
    //   //profiles details
    //   builder.addCase(profileDetail.pending, (state) => {
    //     state.loading = true;
    //     state.associates = [];
    //     state.success = false;
    //     state.error = null;
    //   });
    //   builder.addCase(profileDetail.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.error = null;
    //     state.associates = action.payload;
    //   });
    //   builder.addCase(profileDetail.rejected, (state, action) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.error = action.payload;
    //     state.associates = [];
    //   });
    //   //change password
    //   builder.addCase(changePasswordDetails.pending, (state) => {
    //     state.loading = true;
    //     state.associates = [];
    //     state.success = false;
    //     state.error = null;
    //   });
    //   builder.addCase(changePasswordDetails.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.success = true;
    //     state.error = null;
    //     state.associates = action.payload;
    //   });
    //   builder.addCase(changePasswordDetails.rejected, (state, action) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.error = action.payload;
    //     state.associates = [];
    //   });
  
    //   //testbyemail
    //   builder.addCase(fetchAllAssociatesTestByEmailId.pending, (state) => {
    //     state.loading = true;
    //     state.associates = [];
    //     state.success = false;
    //     state.error = null;
    //   });
    //   builder.addCase(
    //     fetchAllAssociatesTestByEmailId.fulfilled,
    //     (state, action) => {
    //       state.loading = false;
    //       state.success = true;
    //       state.error = null;
    //       state.associates = action.payload;
    //     }
    //   );
    //   builder.addCase(
    //     fetchAllAssociatesTestByEmailId.rejected,
    //     (state, action) => {
    //       state.loading = false;
    //       state.success = false;
    //       state.error = action.payload;
    //       state.associates = [];
    //     }
    //   );
 },
 });
  
  export default associateSlice.reducer;
  