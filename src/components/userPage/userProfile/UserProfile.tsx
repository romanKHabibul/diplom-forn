import { useAuth } from "../../../hooks/useAuth"
import { api } from "../../../redux/api/api"
import ChangeForm from "../changeForm/ChangeForm"
import CommentBlock from "../commentBlock/CommentBlock"
import cl from "./UserProfile.module.sass"
import {useState} from 'react'
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"

const UserProfile = () => {

    const [openChange, setOpenChange] = useState(false)
    const {accessToken} = useAuth()

    const {data: inf} = api.useGetProfileQuery(null, {
        skip: !accessToken
    })

    return (
        <div className={cl.profile}>
        <div className="container">
            <div className={cl.profileItems}>
                <div className={cl.inf}>
                    <div className={cl.image}>
                        <img src="./image/avatar.png" alt={inf?.email} />
                    </div>
                    <div className={cl.row}>
                        <div className={cl.column}>
                            <span>ПОЧТА<br/></span>
                            {inf?.email}
                        </div>
                        <div className={cl.column}>
                            <span>ИМЯ ПОЛЬЗОВАТЕЛЯ<br/></span>
                            {inf?.name}
                        </div>
                        <div className={cl.column}>
                            <span>СОЗДАН<br/></span>
                            {inf?.createAt.toString()}
                        </div>
                        {openChange 
                        ? 
                        <button onClick={() => setOpenChange(!openChange)} className={cl.change}>
                           Закрыть <IoIosArrowUp/> 
                        </button>
                        :
                        <button onClick={() => setOpenChange(!openChange)} className={cl.change}>
                            Изменить <IoIosArrowDown/>
                        </button>
                        }
                        {openChange && inf &&
                            <ChangeForm setOpen={setOpenChange} open={openChange} userId={inf.id}/>
                        }
                    </div>
                </div>
                <CommentBlock userId={inf?.id}/>
            </div>
        </div>
        </div>
    )
}

export default UserProfile
