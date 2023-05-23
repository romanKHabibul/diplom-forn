import { useAuth } from '../../hooks/useAuth'
import { Navigate } from "react-router-dom"
import {FC} from 'react'

const PrivateRoutes: FC <{
    children: React.ReactNode;
}> = ({children}) => {

    const {accessToken} = useAuth()

    if(accessToken){
        return <Navigate to="/"/>
    } 
    
    return (
        <>
        {children}
        </> 
    )
}

export default PrivateRoutes
