import cl from "./ChangeForm.module.sass"
import { SubmitHandler, useForm } from 'react-hook-form';
import validator from 'validator'
import {FC} from 'react'
import { api } from "../../../redux/api/api";

const ChangeForm: FC<{
    userId: number;
    setOpen: (a: boolean) => void;
    open: boolean;
}> = ({userId, setOpen, open}) => {

    const {data: user} = api.useGetByidQuery(userId)
    const [updateUser] = api.useUpdateUserMutation()

    const {register, handleSubmit, formState: {errors}} = useForm<{
        name: string;
        email: string;
    }>()
    const submit: SubmitHandler<{
        name: string;
        email: string;
    }> = data => {
        updateUser(data)
        setOpen(!open)
    }

    return (
        <form className={cl.form} onSubmit={handleSubmit(submit)}>
            <input
                {...register("name", {required: true, minLength: 3, maxLength: 30})}
                type="text" 
                placeholder='Новое имя'
                className={cl.input}
                defaultValue={user?.name}
            />
            {errors.name &&
                <h3 style={{color: 'red', fontSize: "16px"}}>
                    3 - 30 СИМВОЛОВ
                </h3>
            }

            <input 
                {...register("email", {required: true, validate: input => validator.isEmail(input)})}
                type="text" 
                placeholder='Новая почта'
                className={cl.input}
                defaultValue={user?.email}
            />
            {errors.email &&
                <h3 style={{color: 'red', fontSize: "16px"}}>
                    НЕВЕРНО
                </h3>
            }
            <br/>   
            <button className={cl.submit}>
                Изменить
            </button>
        </form>
    )
}

export default ChangeForm
