import { createSlice } from "@reduxjs/toolkit";
import { IRequestedUser } from "../../@types/user.types"
import { login, register } from "./auth.actions";

const initialState: {
    user: IRequestedUser | null;
    accessToken: string;
    isLoading: boolean;
} = {
    user: null,
    accessToken: "",
    isLoading: false
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state){
            state.accessToken = ""
            state.user = null
        }
    },
    extraReducers: builder => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, {payload}) => {
            state.accessToken = payload.accessToken
            state.user = payload.user
            state.isLoading = false
        })
        .addCase(register.rejected, (state) => {
            state.isLoading = true
        })

        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            state.accessToken = payload.accessToken
            state.user = payload.user
            state.isLoading = false
        })
        .addCase(login.rejected, (state) => {
            state.isLoading = true
        })
    }
})