import { FC} from 'react'
import cl from "./VeteranProfile.module.sass"
import { useParams } from 'react-router-dom'
import { api } from '../../../redux/api/api'
import Description from '../description/Description'

const VeteranProfile: FC = () => {

    const {id} = useParams()
    const {data: veterans} = api.useGetVeteransQuery(null)
    const inf = veterans?.find(e => e.id && e.id === Number(id))

    return (
        inf 
        ?
        <div className={cl.profile}>
        <div className="container">
            <div className={cl.profileItems}>
                <div className={cl.fio}>
                    <div className={cl.image}>
                        <img src={inf.imagePath} alt={inf.surname} />
                    </div>
                    <Description inf={inf}/>
                </div>
                <div className={cl.description}>
                    <h2 className={cl.title}>
                        Описание жизни:
                    </h2>
                    <p className={cl.text}>
                        {inf.description}
                    </p>
                </div>
            </div>
        </div>
        </div>
        :
        <h2>Такого ветерана нет</h2>
    )
}

export default VeteranProfile
