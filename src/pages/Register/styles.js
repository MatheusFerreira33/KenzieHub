import styled from 'styled-components';

export const Main = styled.main`

    width: 350px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    margin: auto;


    form{
        width: 350px;
        max-width: 90%;
        padding: 16px;
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
       

        h1{
            font-size: var(--font-size-title1);
            color: var(--color-grey-0);
        }
        label{
            width: 95%;
            margin-left: -25px;
            color: var(--color-grey-0);
            margin-bottom: 5px;
            margin-top: 15px;
        }
        button{
            width: 105%;
            border-radius: 4px;            
        }
        p{
            color: var(--color-grey-1);
        }
        span{
            color: var(--color-negative);
        }
        select{
            width: 105%;
        }
        
        
        
    }


`