import { Header } from '../../components/Header/Header';
import { SectionName, SectionTechnology } from './styles';
import { Dialog } from '../../components/RegisterTecnology/RegisterTecnology';
import { useEffect } from 'react';
import axios from 'axios';
import {ToastContainer} from 'react-toastify';
import { Cards } from '../../components/Cards/Cards';
import {FormUpdate} from '../../components/UpdateTecnology/UpdateTecnology';
import { useContext } from 'react';
import { TechContext } from '../../providers/TechContext/TechContext';
import {UserContext} from '../../providers/UserContext/UserContext';


export const Dashboard = () => {

    const {showModal1,setShowModal1,showModal2,setShowModal2,tecnology,setTecnology,datas,setDatas} = useContext(TechContext);
    const {name,setName,module,setModule,logoout} = useContext(UserContext);

    
    const api = axios.create({
        baseURL: 'https://kenziehub.herokuapp.com/',
        timeout: 3000,
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('@TOKEN'))}`
        }
    });

    useEffect(() => {

        api.get('/profile')
            .then((response) => {
                setName(response.data.name);
                setModule(response.data.course_module);
                
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    useEffect(() => {

        api.get('/profile')
            .then((response) => {
                setTecnology([...response.data.techs]);
            })
            .catch(error => {
                console.log(error);
            });

    }, [tecnology]);

    return (
        <>
            {showModal1 &&
                <Dialog setShowModal1={()=>setShowModal1(false)}>
                    <button onClick={()=>setShowModal1(false)}>X</button>
                </Dialog>

            };
            {showModal2 && 
            
            <FormUpdate setShowModal2={()=>setShowModal2(false)} data={datas}>
                 <button onClick={()=>setShowModal2(false)}>X</button>
            </FormUpdate>
            
            };

            <Header>
                <button onClick={logoout} className='buttonSegundary'>Sair</button>
            </Header>

            <main>
                <SectionName>
                    <h1>Olá, {name}</h1>
                    <p>{module}</p>
                </SectionName>
                <SectionTechnology>
                    <div>
                        <h2>Tecnologias</h2>
                        <button onClick={() => setShowModal1(true)} className='buttonSegundary'>+</button>
                    </div>

                    <ul>
                         {tecnology.map((element,index)=>{
                            return(
                                <Cards setDatas={()=>setDatas([element.title,element.status,element.id])} setShowModal2={()=>setShowModal2(true)}  key={index} id={element.id} title={element.title} status={element.status}/>
                            )
                         })};            

                    </ul>
                </SectionTechnology>
            </main>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}