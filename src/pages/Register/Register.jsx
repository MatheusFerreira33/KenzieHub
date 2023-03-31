import { Header } from '../../components/Header/Header';
import { Main } from './styles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer} from 'react-toastify';
import {useContext} from 'react';
import {UserContext} from '../../providers/UserContext/UserContext';

export const Register = () => {
    const {getDatasForm} = useContext(UserContext);

    const FormYup = yup.object().shape({
        name: yup.string().required('Nome obrigatorio'),
        email: yup.string().required('Email obrigatorio').email('Email invalido'),
        password: yup.string().required('Senha obrigatoria').min(8, 'Senha com minimo 8 caracteres')
            .matches(/(\d)/, 'Deve ter pelo menos 1 numero')
            .matches(/([a-z])/, 'Deve ter pelo menos uma letra minuscula')
            .matches(/([A-Z])/, 'Deve ter pelo menos uma letra maiuscula')
            .matches(/(\W|_)/, 'Deve ter pelo menos 1 simbolo'),

        confPassword: yup.string().oneOf([yup.ref('password')], 'Senhas não iguais'),
        bio: yup.string().required('Bio obrigatoria'),
        contact: yup.string().required('Contato obrigatorio'),
        course_module: yup.string().required('Seleção modulo obrigatorio')
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormYup)
    });

    return (
        <>
            <Header>
                <Link to={'/'} className='Link'>
                    <button className='buttonSegundary'>Voltar</button>
                </Link>
            </Header>
            <Main>
                <form onSubmit={handleSubmit(getDatasForm)}>
                    <h1>Crie sua conta</h1>
                    <p>Rapido e grátis, vamos nessa</p>

                    <label htmlFor='name'>Nome</label>
                    <input type='text' {...register('name')} placeholder=' Digite aqui seu nome' id='name' />
                    <span>{errors.name?.message}</span><br />

                    <label htmlFor='email'>Email</label>
                    <input type='email' {...register('email')} placeholder=' Digite aqui seu email' id='email' />
                    <span>{errors.email?.message}</span><br />

                    <label htmlFor='password'>Senha</label>
                    <input type='password' {...register('password')} placeholder=' Digite aqui sua senha' id='password' />
                    <span>{errors.password?.message}</span><br />

                    <label htmlFor='confPassword'>Confirmar Senha</label>
                    <input type='password' {...register('confPassword')} placeholder=' Digite novamente sua senha' id='confPassword' />
                    <span>{errors.confPassword?.message}</span><br />

                    <label htmlFor='bio'>Bio</label>
                    <input type='text' {...register('bio')} placeholder=' Fale sobre você' id='bio' />
                    <span>{errors.bio?.message}</span><br />

                    <label htmlFor='contato'>Contato</label>
                    <input type='text' {...register('contact')} placeholder='Opção de contato' id='contato' />
                    <span>{errors.contact?.message}</span><br />

                    <label id='modulo'>Selecionar módulo</label>
                    <select id='modulo'{...register('course_module')}>
                        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo (Introdução ao Frontend)</option>
                        <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo (Frontend Avançado)</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo (Introdução ao Backend)</option>
                        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo (Backend Avançado)</option>
                    </select>
                    <span> {errors.course_module?.message}</span><br />
                    <button className='buttonPrimary'>Cadastrar</button>
                </form>

            </Main>
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