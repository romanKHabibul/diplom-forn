import { IUser } from "./user.types";

export interface IFeedBack {
    id: number;
    createAt: Date;
    updateAt: Date;
    title: string;
    description: string;
    userId: IUser
}

export interface IAddFeedBack {
    title: string;
    description: string;
}