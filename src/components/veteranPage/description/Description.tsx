import {FC} from 'react'
import cl from "./Description.module.sass"
import { IVeteran } from '../../../@types/veteran.types'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import validator from "validator"

const Description: FC<{
    inf: IVeteran
}> = ({inf}) => {

    // const [openChange, setOpenChange] = useState(false)
    // const {register, handleSubmit, formState: {errors}, reset} = useForm<{
    //     name: string;
    //     email: string;
    // }>()

    // const submit: SubmitHandler<{
    //     name: string;
    //     email: string;
    // }> = data => {
    //     console.log(data)
    // }

    return (
        <div className={cl.description}>
            <div className={cl.row}>
                <div className={cl.column}>
                    <span>ФАМИЛИЯ<br/></span>
                    {inf.surname}
                </div>
                <div className={cl.column}>
                    <span>ИМЯ<br/></span>
                    {inf.name}
                </div>
                <div className={cl.column}>
                    <span>ОТЧЕСТВО<br/></span>
                    {inf.patronomyc}
                </div>
                {/* <button onClick={() => setOpenChange(!openChange)} className={cl.change}>
                    {openChange ? "Закрыть" : "Изменить"}
                </button> */}
            </div>
            <div className={cl.row}>
                <div className={cl.column}>
                    <span>ДАТА РОЖДЕНИЯ<br/></span>
                    {inf.dates}
                </div>
            </div>
            <div className={cl.row}>
                <div className={cl.column}>
                    <span>ДОСТИЖЕНИЯ<br/></span>
                    {inf.grades}
                </div>
            </div>

            {/* {openChange &&
            <form className={cl.form} onSubmit={handleSubmit(submit)}>

                <input
                    {...register("name", {required: true, minLength: 6, maxLength: 30})}
                    type="text" 
                    placeholder='Новое имя'
                    className={cl.input}
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
            } */}
        </div>
    )
}

export default Description
