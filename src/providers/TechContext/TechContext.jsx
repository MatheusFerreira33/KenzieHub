import { createContext } from 'react';
import { toast } from 'react-toastify';
import {api} from '../../services/api';
import { useState } from 'react';

export const TechContext = createContext();

export const TechProvider = ({children}) =>{
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [tecnology, setTecnology] = useState([]);
    const [datas,setDatas] = useState([]);


    const getDatas = async (datas) => {
        try {
            const result = await api.post('/users/techs', datas, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('@TOKEN'))}`
                }
            });
            
            toast.success('Tecnologia cadastrada com sucesso!',{
                className: 'toastySucess'
            });
            setShowModal1(false);

        }
        catch (errors) {
            toast.error('Ops! Algo deu errado',{
                className: 'toastyError'
            });
        };

    }

    const updateInfo = async (e,data,id) => {
        e.preventDefault();
    
     try{
        const result = await api.put(`/users/techs/${id}`,{'status':data},{headers:{
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('@TOKEN'))}`
        }})
        toast.success('Tecnologia atualizada com sucesso!',{
            className:'toastySucess'
        });
        setShowModal2(false);
     }
     catch (errors) {
        toast.error('Ops! Algo deu errado',{
            className: 'toastyError'
        });
        
    };
    }

    const deleteCard = (e,id)=>{
        e.preventDefault();
       try{
        api.delete(`/users/techs/${id}`,{headers:{
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('@TOKEN'))}`
        }})
        toast.success('Tecnologia deletada com sucesso!',{
            className:'toastySucess'
        });
        setShowModal2(false);
       }
       catch (errors){
        toast.error('Ops, Algo deu errado',{
            className:'toastyError'
        });
       };

    }
    
    
    return(
        <TechContext.Provider value={{getDatas,showModal1,setShowModal1,updateInfo,showModal2,setShowModal2,deleteCard,tecnology,setTecnology,datas,setDatas}}>
            {children}
        </TechContext.Provider>
    )
}