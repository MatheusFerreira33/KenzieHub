import {UserProvider} from './UserContext/UserContext';


export const Providers = ({children})=>{
    return (<UserProvider> {children}</UserProvider>)
}