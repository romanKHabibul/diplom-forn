import React from 'react'
import cl from "./Form.module.scss"
import {useLocation, Link, useNavigate} from 'react-router-dom'
import { useForm, SubmitHandler} from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import validator from 'validator'
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const {pathname: location} = useLocation()
    const navigate = useNavigate()
    const {register: registerThunk, login: loginThunk} = useActions()

    function redirect(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        location == "/login"
        ? navigate("/register")
        : navigate("/login")
    }

    const {register, handleSubmit, formState: {errors}} = useForm<{
        email: string;
        password: string;
        name: string;
    }>()

    const submit: SubmitHandler<{
        email: string;
        password: string;
        name: string;
    }> = data => {
        if(location == "/login"){
            loginThunk(data)
        } else {
            registerThunk(data)
        } 
    }

    return (
        <>
        <form 
            className={cl.form} 
            onSubmit={handleSubmit(submit)}
        >
            <h2 className={cl.title}>
                {location =="/login" ? "Авторизация" : "Регистрация"}
            </h2>


            <h3 className={cl.subtitle}>
                Введите эл. почту:
            </h3>
            <input 
                className={cl.authInput} 
                {...register("email", {required: true, validate: input => validator.isEmail(input)})}
                type="text" 
                placeholder="Почта..."/>
            {errors?.email &&
            <div style={{textTransform: "uppercase", color: "red", margin: "0 0 10px", textAlign: "left"}} className={cl.error}>
                Неверный адресс электронной почты
            </div>
            }


            <h3 className={cl.subtitle}>
                Введите пароль:
            </h3>
            <input 
                className={cl.authInput} 
                {...register("password", {required: true, minLength: 6, maxLength: 30})}
                type="text" 
                placeholder="Пароль..."/>
            {errors?.password &&
                <div style={{textTransform: "uppercase", color: "red", margin: '0 0 10px', textAlign: "left"}} className={cl.error}>
                    Длина пароля от 6 до 30 символов
                </div>
            }  


            {location == "/register"  &&
            <>
            <h3 className={cl.subtitle}>
                Введите имя:
            </h3> 
            <input 
                className={cl.authInput} 
                {...register("name", {required: true, minLength: 3, maxLength: 30})}
                type="text" 
                placeholder="Имя..."/>
                {errors?.name &&
                    <div style={{textTransform: "uppercase", color: "red", margin: '0 0 10px', textAlign: "left"}} className={cl.error}>
                        Длина имени от 3 до 30 символов
                    </div>
                }
            </>
            }


            <button 
                onClick={redirect} 
                className={cl.redirect}
            >
                {location == "/login" ? "Нет аккаунта? Нажмите сюда, чтобы создать" : "Есть аккаунт? Войдите"}
            </button>


            <div className={cl.buttons}>
                <Link to="/">
                <button 
                    type="button"
                    className={cl.back}>
                    Вернуться
                </button>
                </Link>
                <button 
                    className={cl.submit} 
                    type="submit"
                >
                    {location == "/login" ? "Войти" : "Создать"}
                </button>
            </div>
        </form>
        </>
    )
}

export default Form
