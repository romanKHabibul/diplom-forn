import { useState } from 'react'
import cl from "./Veteran.module.scss"
import {BiSearchAlt} from 'react-icons/bi'
import {MdOutlineClose} from "react-icons/md"
import { api } from '../../../redux/api/api'
import VeteranCard from '../veteranCard/VeteranCard'
import VeteranLoader from '../VeteranLoader'

const Veterans = () => {

    const [page, setPage] = useState(1)
    const limit = 4
    const {data: veterans, isLoading} = api.useGetVeteransWithPaginationQuery({page,limit})
    const {data: allVeterans} = api.useGetVeteransQuery(null)
    const totalPages = allVeterans && Math.ceil(allVeterans.length / limit)

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

                veterans && veterans.length > 0 

                    ?
                    
                    <div className={cl.veteranCards}>
                    {veterans && veterans.filter(e => e.surname && e.surname.toLowerCase().includes(search.toLowerCase())).map(veteran => 
                        veteran?.surname 
                        ?
                            <VeteranCard inf={veteran} key={veteran.id}/>
                        :
                            <h2>Ветеран с фамилией не найден</h2>
                    )}
                    </div>

                    :

                    <div className={cl.empty}>
                        <h2>
                            Список пуст😕
                            
                        </h2>
                        <p>
                            К сожалению, не удалось получить список Ветеранов.<br/>
                            Повторите попытку позже
                        </p>
                    </div>
                }
            </div>
            <div className={cl.pagination}>
                {allVeterans &&
                [...new Array(totalPages)].map((_,index) => 
                    <button
                        onClick={() => setPage(index+1)}
                        className={index + 1 == page ? cl.paginationItem + ' ' + cl.active : cl.paginationItem} 
                        key={index}
                    >
                        {index + 1}
                    </button>
                )}
            </div>
        </div>
        </div>
    )
}

export default Veterans
