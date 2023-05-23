import {FC} from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { api } from '../../redux/api/api';

const PrivateAdmin: FC<{
    children: React.ReactNode;
}> = ({children}) => {

    const {accessToken} = useAuth()
    const {data:user} = api.useGetProfileQuery(null, {
        skip: !accessToken
    })

    if(!accessToken ||  user?.role !== "ADMIN"){
        return <Navigate to="/"/>
    }

    return (
        <>
            {children}
        </>
    )
}

export default PrivateAdmin
