import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, IRequested } from "../../@types/user.types";
import { UserService } from "../../service/user.serivce";

export const register = createAsyncThunk<IRequested, IRegister>(
    "auth/register",
    async (request) => {
        const response = await UserService.register(request)
        return response
    }
)

export const login = createAsyncThunk<IRequested, ILogin>(
    "auth/login",
    async (request) => {
        const response = await UserService.login(request)
        return response
    }
)