import styled from "styled-components"

export const Dialogg = styled.dialog`

        position: absolute;
        top: 0px;
        left: 0px;
        width: 99%;
        height: 160%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.2);
        border: none;

        form{
        width: 350px;
        padding: 0px;
        margin-top: -350px;
        margin-left: -30px;
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border-radius: mixed;
        

        .ModalHeader{
            width: 94%;
            height: 50px;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            border-radius:  5px 5px 0px 0px;
            align-items: center;
            background-color: var(--color-grey-2);

            h3{
                color: var(--color-grey-0);
            }
            button{
                background-color: var(--color-grey-2);
                cursor: pointer;
                border: none;
                font-size: 15px;
                color: var(--color-grey-1);
                font-family: 'Inter',sans-serif;

            }
        }

        label{
            margin-left: 10px;
            margin-top: 25px;
            color: var(--color-grey-0);
        }
        input{
            margin-left: 10px;
            width: 85%;
            margin-top: 5px;
        }
        select{
            margin-left: 10px;
            margin-top: 5px;
        }
        .buttonForm{
            width: 93%;
            height: 50px;
            margin-left: 10px;
        }
        span{
                margin-left: 15px;
                color: var(--color-negative);
            }

    }


`