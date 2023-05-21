import { useState } from 'react'
import cl from "./Veteran.module.sass"
import {BiSearchAlt} from 'react-icons/bi'
import {MdOutlineClose} from "react-icons/md"
import { api } from '../../../redux/api/api'
import VeteranCard from '../veteranCard/VeteranCard'
import VeteranLoader from '../VeteranLoader'

const Veterans = () => {

    const {data: veterans, isLoading} = api.useGetVeteransQuery(null)

    const [search, setSearch] = useState("")

    return (
        <div className={cl.veterans}>
        <div className="container">
            <div className={cl.veteransItems}>
                <div className={cl.search}>
                    <h2 className={cl.title}>
                        Ветераны
                    </h2>
                    <div className={cl.inputBlock}>
                        <BiSearchAlt className={cl.lupa}/>
                        <input value={search} onChange={e => setSearch(e.target.value)} type="text" className={cl.searchInput} placeholder="Попробуйте найти..."/>
                        {search &&
                        <button onClick={() => setSearch("")} className={cl.remove}>
                            <MdOutlineClose/>
                        </button>
                        }
                    </div>
                </div>

                {isLoading ?

                <div className={cl.veteranCards}>
                    <VeteranLoader/>
                </div>

                :
                
                <div className={cl.veteranCards}>
                   {veterans &&  veterans.filter(e => e.surname && e.surname.toLowerCase().includes(search.toLowerCase())).map(veteran => 
                        <VeteranCard inf={veteran} key={veteran.id}/>
                   )}
                </div>
                }
            </div>
        </div>
        </div>
    )
}

export default Veterans
