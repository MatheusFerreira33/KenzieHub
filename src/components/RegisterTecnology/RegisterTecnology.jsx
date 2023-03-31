import { Dialogg } from "./styles";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext/TechContext";


export const Dialog = ({ children }) => {

    const {getDatas} = useContext(TechContext);

    const FormYup = yup.object().shape({
        title: yup.string().required('Campo obrigatorio')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormYup)
    });


    return (

        <>
            <Dialogg >
                <form onSubmit={handleSubmit(getDatas)}>
                    <div className='ModalHeader'>
                        <h3>Cadastrar Tecnologia</h3>
                        {children}
                    </div>

                    <label htmlFor='title'>Nome</label>
                    <input type='text' {...register('title')} id='title' placeholder='Nome da tecnologia' />
                    <span>{errors.title?.message}</span>

                    <label htmlFor='status'>Selecionar status</label>
                    <select id='status' {...register('status')}>
                    <option value='Iniciante'>Iniciante</option>
                        <option value='Intermediário'>Intermediário</option>
                        <option value='Avançado'>Avançado</option>
                    </select>

                    <button className='buttonPrimary buttonForm'>Cadastrar Tecnologia</button>
                </form>
            </Dialogg>
        </>

    )
}