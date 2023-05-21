import { combineReducers } from "redux";
import { AuthSlice } from "./auth/auth.slice";
import { api } from "./api/api";

export const RootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: AuthSlice.reducer
})