import {Outlet} from 'react-router-dom';
import { useContext} from 'react';
import {UserContext} from '../../providers/UserContext/UserContext';
import { useNavigate,Navigate } from 'react-router-dom';
import { useEffect } from 'react';


export const ProtectedRoutes = ()=>{

    const {checkUser} = useContext(UserContext);
    const navigate = useNavigate();
    

    

    useEffect(()=>{
        if(!checkUser){
            navigate('/')
        }
    },[]);

    return(
        <>
            {checkUser ? <Outlet/>: <Navigate to={'/'} /> }
        </>
    )
}