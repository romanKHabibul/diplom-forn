import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, IRequested } from "../../@types/user.types";
import { UserService } from "../../service/user.serivce";
import { toast } from 'react-toastify';

export const register = createAsyncThunk<IRequested, IRegister>(
    "auth/register",
    async (request, thunkAPI) => {
        try {
        const response = await UserService.register(request)
        toast("Регистрация успешно!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return response
        } catch (error) {
            toast.warn(`Неудачно`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk<IRequested, ILogin>(
    "auth/login",
    async (request, thunkAPI) => {
        try {
            const response = await UserService.login(request)
            toast("Авторизация успешно!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return response
        } catch (error) {
            toast.warn(`Неудачно`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return thunkAPI.rejectWithValue(error)            
        }
    }
)