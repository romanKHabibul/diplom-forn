import { ILogin, IRegister, IRequested } from "../@types/user.types";
import { axiosConfig } from "../api/axios";


export const UserService = {

    async register(request: IRegister){
        const response = await axiosConfig.post<IRequested>("/auth/register", request)
        return response.data
    },

    async login(request: ILogin){
        const response = await axiosConfig.post<IRequested>("/auth/login", request)
        return response.data
    }

}