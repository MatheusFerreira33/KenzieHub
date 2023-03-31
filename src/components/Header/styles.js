import styled from 'styled-components';

export const Heade = styled.header`

    width: 350px;
    max-width: 95%;
    display: flex;
    justify-content: space-around;
    gap: 80px;
    justify-content: center;
    margin: auto;
    margin-top: 30px;
    

    img{
        width: 150px;
    }

    button{
        margin-right: 3px;
    }

    @media(min-width: 1000px){
        width: 63%;
        justify-content: space-between;
    }
`