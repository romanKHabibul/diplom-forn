import { useAuth } from '../../hooks/useAuth'
import {Navigate, Outlet} from "react-router-dom"

const PrivateRoutes = () => {

    const {accessToken} = useAuth()

    return (
        accessToken ? <Navigate to="/"/> : <Outlet/>
    )
}

export default PrivateRoutes
