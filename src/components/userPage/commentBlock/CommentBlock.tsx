import {FC} from 'react'
import cl from "./CommentBlock.module.sass"
import { api } from '../../../redux/api/api'
import CommentCard from '../../adminPage/commentCard/CommentCard'

const CommentBlock: FC<{userId: number | undefined}> = ({userId}) => {

    const {data: comments} = api.useGetFeedbackQuery(null)
    const getted = comments?.filter(e => e.userId.id == Number(userId))

    return (
        <div className={cl.comments}>
            {getted && getted.length > 0
            ? 
            getted.map((comment, index) => 
                <CommentCard id={index} inf={comment} key={comment.id}/>
            )
            :
            <div className={cl.empty}>
                Вы еще не оставляли вопросов
            </div>
            }
        </div>
    )
}

export default CommentBlock
