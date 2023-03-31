import { Dialog } from './styles';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {TechContext} from '../../providers/TechContext/TechContext';
import {useContext} from 'react';

export const FormUpdate = ({ children, data }) => {
    const {updateInfo,deleteCard} = useContext(TechContext);

    const [status, setStatus] = useState('');
    let title = data[0];
    let id = data[2];

    useEffect(() => {
        setStatus(data[1]);

    }, []);
    const { register} = useForm();


    return (
        <Dialog>


            <form>
                <div className='ModalHeader'>
                    <h3>Tecnologia Detalhes</h3>
                    {children}
                </div>

                <label htmlFor='title'>Nome do projeto</label>
                <input type='text' value={title} id='title' />


                <label htmlFor='status'>Status</label>
                <select id='status' {...register('status')} value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value='Iniciante'>Iniciante</option>
                        <option value='Intermediário'>Intermediário</option>
                        <option value='Avançado'>Avançado</option>
                </select>

                <div className='buttonsUpdate'>
                    <button onClick={(e)=>updateInfo(e,status,id)} className='buttonPrimary buttonSave'>Salvar alterações</button>
                    <button onClick={(e)=>deleteCard(e,id)} className='buttonThird'>Excluir</button>
                </div>
            </form>

        </Dialog>
    )
}