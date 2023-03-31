import {createContext} from 'react';
import {api} from '../../services/api';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import {useEffect} from 'react';

export const UserContext = createContext({});

export const UserProvider = ({children})=>{
    const navigate = useNavigate();
    const [checkUser,setCheckUser] = useState(null);
    const [name, setName] = useState('');
    const [module, setModule] = useState('');

    const logoout = () => {
        localStorage.clear();
        navigate('/');
    };

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('@TOKEN'));

        if(token){
            setCheckUser(true);
            navigate('/checkUser');
        };
    },[]);

    const getDatasFormLogin= async (datas) => {

        await api.post('/sessions', datas)
            .then(response => {
                localStorage.setItem('@TOKEN', JSON.stringify(response.data.token));
                toast.success('Login feito com sucesso',{
                    className: 'toastySucess'
                });
                setCheckUser(response.data.user);
                
                setTimeout(() => { navigate('/checkUser') }, 1000);
            })
            .catch((errors) => {
                console.log(errors);
                toast.error('Email ou senha incorretos!',{
                    className:'toastyError'
                });
            });
    }

    const getDatasForm = (datas) => {
        

        api.post('/users', datas)
            .then(response => {
                toast.success('Conta criada com sucesso!',{
                    className: 'toastySucess'
                });
                setTimeout(() => { navigate('/') }, 1000);

            }).catch((errors) => {
                
                if (errors.response.data.message == 'Email already exists') {
                    toast.error('E-mail já existe',{
                        className:'toastyError'
                    })
                }else{
                    toast.error('Ops! Algo deu errado',{
                        className:'toastyError'
                    });

                };
            });

    }


    return(
        <UserContext.Provider value={{getDatasForm,getDatasFormLogin,checkUser,name,setName,module,setModule,logoout}}>
            {children}
        </UserContext.Provider>
    )

}