import styled from 'styled-components';

export const Li = styled.li`

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    background-color: var(--color-grey-4);
    cursor: pointer;
    margin-left: -10px;
    border-radius: 8px;
    height: 50px;

    :hover{
        background-color: var(--color-grey-2);
    }


    h3{
        color: var(--color-grey-0);
    }
    span{
        color: var(--color-grey-1);
    }

    
`