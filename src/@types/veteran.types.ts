export interface IVeteran {
    id: number;
    createAt: Date;
    updateAt: Date;
    surname?: string;
    name?: string;
    patronomyc?: string;
    dates?: string;
    grades?: string;
    description?: string;
    imagePath?: string;
}