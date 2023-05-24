import cl from './preview.module.scss'
import { Link } from 'react-router-dom'
import { api } from '../../../redux/api/api'
import { useAuth } from '../../../hooks/useAuth'
import { useEffect, useState } from 'react'

const Preview = () => {

    const {accessToken} = useAuth()
    const {data: user} = api.useGetProfileQuery(null, {
        skip: !accessToken
    })
    const {activeScroll} = useAuth()
    const [active, setActive] = useState(false)

    useEffect(() => {
        if(activeScroll){
            setActive(true)
        } else {
            setActive(false)
        }
    }, [activeScroll])

    return (
        <>
        <div className={cl.prev}>
            <div className="container">
                <div className={active ? cl.prevItems + ' ' + cl.active : cl.prevItems}>
                    <div className={cl.left}>
                        <h2 className={cl.title}>
                            СТАЛИНГРАДСКАЯ БИТВА
                        </h2>
                        <h3 className={cl.subtitle}>
                            Подвиг народа
                        </h3>
                    </div>
                    <div className={cl.right}>
                    {user?.role == "ADMIN" &&
                        <Link to="/admin">
                        <button className={cl.nav}>
                            Админ. панель
                        </button>
                        </Link>
                        }
                        <Link to="/history">
                        <button className={cl.nav} style={{borderLeft: "2px solid #c1a886"}}>
                            История
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={cl.logo}>
            <h2 className={cl.logoTitle}>
            ГЕРОИ СТАЛИНГРАДСКОЙ БИТВЫ ГОРОД ЗЛАТОУСТ
            </h2>
        </div>
        </>
    )
}

export default Preview
