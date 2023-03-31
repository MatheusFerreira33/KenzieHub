import Logo from '../../assets/Logo.svg';
import { Main } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../providers/UserContext/UserContext';
import { useContext } from 'react';

export const Login = () => {
    
    const {getDatasFormLogin} = useContext(UserContext);
            
    const formYup = yup.object().shape({
        email: yup.string().required('Email obrigatorio').email('Email invalido'),
        password: yup.string().required('Senha obrigatoria')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formYup)
    });
    

    return (

        <>
            <Main>
                <img src={Logo} alt='Kenzie Hub' />
                <form onSubmit={handleSubmit(getDatasFormLogin)}>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' {...register('email')} placeholder='Digite o seu email' />
                    <span>{errors.email?.message}</span>
                    <br />

                    <label htmlFor='senha'>Senha</label>
                    <div className='div'>
                        <input type='password' id='senha' {...register('password')} placeholder='Digite a sua senha' />
                        <span><FontAwesomeIcon icon={faEye}/></span>
                    </div>
                        <span>{errors.password?.message}</span>

                        <button type='submit' className='buttonPrimary'>Entrar</button>

                        <p>Ainda não possui uma conta?</p>

                        <Link to={'/register'} className='Link'>
                            <button className='buttonThird'>Cadastre-se</button>
                        </Link>

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