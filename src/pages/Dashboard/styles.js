import styled from 'styled-components';

export const SectionName = styled.section`

    max-width: 100%;
    height: 100px;
    border: 1px  solid var(--color-grey-3);
    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding: 10px;
    flex-wrap: wrap;

    h1{
        color: var(--color-grey-0);
        width: 253px;
    }
    p{
        color: var(--color-grey-1);
        margin-top: 0px;
    }

    @media (min-width: 542px){
        justify-content: space-around;
        p{
        color: var(--color-grey-1);
        margin-top: 5px;
    }
    }

`

export const SectionTechnology = styled.section`

    width: 900px;
    max-width: 96%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        width: 99%;
        max-width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 0px;
    }
    h2{
        color: var(--color-grey-0);
    }
    button{
        width: 40px;
        height: 40px;
        padding: 0px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        margin-right: 0px;
    }

    ul{ 
        width: 780px;
        max-width: 90%;
        padding: 16px;
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        list-style: none;
        gap: 25px;
    }

`
