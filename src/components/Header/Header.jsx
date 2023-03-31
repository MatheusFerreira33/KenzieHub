import { Heade } from './styles';
import Logo from '../../assets/Logo.svg';

export const Header = ({children})=>{

    return(

        <Heade>
            <img src={Logo} alt='kenzie Hub'/>
            {children}
        </Heade>
    )
}