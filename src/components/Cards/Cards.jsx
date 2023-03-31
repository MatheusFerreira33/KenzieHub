import {Li} from './styles';

export const Cards = ({title,status,setShowModal2,setDatas}) => {
    return (

        <Li onClick={()=>[setShowModal2(true),setDatas()]}>
            <h3>{title}</h3>
            <span>{status}</span>
        </Li>
    )
}