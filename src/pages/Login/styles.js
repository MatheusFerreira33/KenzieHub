import styled from 'styled-components';

export const Main = styled.main`

    width: 94%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    align-items: center;
    gap: 25px;
    

    img{
        width: 150px;
    }

    form{
        width: 350px;
        max-width: 90%;
        height: 420px;
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
        .Link{
            width: 100%;
            margin-left: -15px;
        }
        .div{
            
            width: 104%;
            display: flex;
            align-items: center;
            background-color: var(--color-grey-2);
            border-radius: 4px;
            position: relative;
            margin-left: 5px;
            
            input{
                width: 90%;
            }
            span{
                color:var(--color-grey-1);
                position: absolute;
                right: 20px;
                cursor: pointer;
            }
        }
    }

`