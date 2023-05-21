export interface IUser {
    id: number;
    createAt: Date;
    updateAt: Date;
    email: string;
    password: string;
    name: string;
    role: string;
    avatarPath: string;
    feedBack: [];
}

export interface IRegister {
    email: string;
    password: string;
    name: string;
    role?: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRequestedUser {
    id: number;
    email: string;
}

export interface IRequested {
    user: IRequestedUser;
    accessToken: string;
}

export interface IUpdateUser {
    name: string;
    email: string;
}
