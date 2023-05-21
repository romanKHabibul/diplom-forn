import cl from './Addveteran.module.sass'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../../redux/api/api'
import { IVeteran } from '../../../@types/veteran.types'

const AddVeteran = () => {

    const {reset, register, handleSubmit} = useForm<IVeteran>()
    const [addVeteran] = api.useAddVeteransMutation()

    const submit: SubmitHandler<IVeteran> = (data) => {
        if(data.description == ""){
            const {description, ...rest} = data
            addVeteran(rest)
            reseting()
        } else {
            addVeteran(data)
            reseting()
        }
    }

    function reseting(){
        reset({name: "", surname: "", patronomyc: "", dates: "", grades: "", description: ""})
    }

    return (
        <form 
            className={cl.form} 
            onSubmit={handleSubmit(submit)}
        >
            <div className={cl.right}>
                <input 
                    {...register("surname", {required: true})}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Фамилия'
                    />
                <input 
                    {...register("name")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Имя'
                    />  
                <input 
                    {...register("patronomyc")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Отчество'
                    />
                <input 
                    {...register("dates")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Время жизни'
                    />
                <input 
                    {...register("grades")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Достижения'
                    />
                <input 
                    {...register("description")}
                    type="text" 
                    className={cl.addVeteran} 
                    placeholder='Описание'
                    />
                <button onClick={() => reseting()} className={cl.submit}>
                    Очистить поля
                </button>
                <button className={cl.submit}>
                    Добавить карточку
                </button>
            </div>
        </form>
    )
}

export default AddVeteran
