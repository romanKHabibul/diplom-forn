import { useEffect, useState } from 'react'
import cl from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'
import { api } from '../../../redux/api/api'
import { useActions } from '../../../hooks/useActions'

const Header = () => {

    const {pathname: location} = useLocation() 
    const [activeHeader, setActiveHeader] = useState(false)
    const {setActiveScroll} = useActions()
    const active = [cl.header]
    const {user} = useAuth()
    const {data: profile, isLoading} = api.useGetProfileQuery(null, {
        skip: !user
    })
    const {logout} = useActions()

    useEffect(() => {
        window.addEventListener("scroll", () => scroll())

        return window.removeEventListener("scroll", () => scroll())
    }, [])

    function scroll(){
        const view = window.scrollY
        if(view > 500){
            setActiveHeader(true)
            setActiveScroll(true)
        } else {
            setActiveHeader(false)
            setActiveScroll(false)
        }
    }

    if(activeHeader && location !== "/profile"){
        active.push(cl.active)
    }

    return (
        <header className={active.join(" ")}>
        <div className="container">


            <div className={cl.headerItems}>
                <Link to="/">
                <div className={cl.left}>
                    <div className={cl.headerTitle}>
                        Подвиг<br/> Народа <br/> <span>1942-1943</span>
                    </div>
                    <img 
                        className={cl.logoImg} 
                        src="./image/star-logo.png" 
                        alt="star" 
                    />
                </div>
                </Link>
                <button className={cl.link}>
                    {location == "/" ? "Главная страница" : location =="/hystory" ? "История" : location == "/admin" ? "Админ. панель" : location == "/history" ? "История" : "Профиль"}
                </button>
                <div className={cl.buttons}>
                {user 
                ?
                profile && isLoading
                    ?
                    <h2>Загрузка</h2>
                    :
                    <div className={cl.account}>
                        <Link to="/profile" style={{display: "flex", alignItems: "center"}}>
                        <img 
                            src="./image/avatar.png"
                            alt="avatar" 
                            width="40px"
                            height="40px"
                            style={{borderRadius: "50%"}}
                        />
                        <button className={cl.accountText}>
                            {profile?.name}
                        </button>
                        </Link>
                        <button onClick={() => logout()} className={cl.logout}>
                            <FiLogIn/>
                        </button>
                    </div>
                :
                <Link to="/register">
                <button className={cl.auth}>
                    Создать аккаунт
                </button>
                </Link>
                }
                </div>
            </div>


        </div>
    </header>
    )
}

export default Header
