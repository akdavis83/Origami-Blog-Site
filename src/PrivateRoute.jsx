import { useAuth } from "./context/auth"
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoute = () => {



    if(sessionStorage.getItem('token')) return <Outlet/>
    else return <Navigate to='/login'/>
}

export default PrivateRoute