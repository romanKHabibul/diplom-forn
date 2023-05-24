import cl from './FeedBackForm.module.scss'
import { useNavigate } from 'react-router'
import { api } from '../../../redux/api/api'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../../hooks/useAuth'

const FeedBackForm = () => {

    const {accessToken} = useAuth()
    const navigate = useNavigate()
    const [addFeedback] = api.useAddFeedBacksMutation()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<{
        title: string;
        description: string;
    }>()

    const submit: SubmitHandler<{
        title: string;
        description: string;
    }> = data => {
        if(accessToken){
            addFeedback(data)
            reset({title: "", description: ""})
        } else {
            navigate("/register")
        }
    }

    return (
        <form className={cl.feedback} onSubmit={handleSubmit(submit)}>
            <h2 className={cl.title}>
                Есть интересующие вопросы?
            </h2>

            <input 
                type="text" 
                {...register("title", {required: true, minLength: 10, maxLength: 50})}
                className={cl.feedbackInput}
                placeholder='Озаглавьте вопрос'
            />
            {errors?.title &&
            <div style={{color: "red", margin: '0 0 10px', textTransform: 'uppercase'}}>
                Длина заголовка от 10 до 50 символов
            </div>
            }

            <input 
                type="text" 
                {...register("description", {required: true, minLength: 50, maxLength: 1500})}
                className={cl.feedbackInput}
                placeholder='Опишите, что вас интересует'
            />
            {errors?.description &&
            <div style={{color: "red", margin: '0 0 10px', textTransform: 'uppercase'}}>
                Длина описания от 50 до 1500 символов
            </div>
            }
            
            <button type="submit" className={cl.submit}>
                Отправить 
            </button>
        </form>
    )
}

export default FeedBackForm
