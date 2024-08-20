import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./Auth/AuthSlice"
import AssociatesSlice from "./Associates/associateSlice"



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        associates : AssociatesSlice,
    }
})