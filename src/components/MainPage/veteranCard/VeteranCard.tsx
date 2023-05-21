import { FC } from 'react'
import cl from "./VeteranCard.module.sass"
import { Link } from 'react-router-dom'
import { IVeteran } from '../../../@types/veteran.types'

const VeteranCard: FC<{
    inf: IVeteran
}> = ({inf}) => {
    return (
        <Link to={`/veterans/${inf.id}`}>
        <div className={cl.card}>
            <img src={inf.imagePath} alt="" className={cl.veteranImg}/>
            <div className={cl.inf}>
                <h3 className={cl.title}>
                    {inf.surname + ' ' + inf.name + ' ' + inf.patronomyc}
                </h3>
                <h4 className={cl.date}>
                    {inf.dates}
                </h4>
                <button className={cl.more}>
                    Узнать больше
                </button>
            </div>
        </div>
        </Link>
    )
}

export default VeteranCard
