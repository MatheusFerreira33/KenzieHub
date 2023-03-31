import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body{
    font-family: 'Inter',sans-serif;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-size: 1rem;
    background-color: var(--color-grey-4);
    overflow: hidden;
}

:root{
    --color-primary: #FF577F;
    --color-primary-Focus:#FF427F;
    --color-primary-Negative:#59323F;
    --color-grey-4: #121214;
    --color-grey-3:#212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0 : #F8F9FA;
    --color-sucess: #3FE864;
    --color-negative:#E83F5B;
}

:root{
    --font-size-title1: 1rem;
    --font-size-title2: 1rem;
    --font-size-title3: 1rem;
     --font-weigth: bold;
}

.buttonPrimary{
    background-color: var(--color-primary);
    padding: 10px;
    color: var(--color-grey-0);
    font-family: 'Inter',sans-serif;
    border: none;
    border-radius: 8px;
    width: 100px;
    cursor: pointer;
    font-size: var(--font-size-title1);
    margin: 16px;
}

.buttonPrimary:hover{
    background-color: var(--color-primary-Focus);
}

.buttonSegundary{
    background-color: var(--color-grey-3);
    padding: 10px;
    color: var(--color-grey-0);
    font-family: 'Inter',sans-serif;
    border: none;
    border-radius: 8px;
    width: 100px;
    cursor: pointer;
    font-size: var(--font-size-title1);
    margin: 16px;
}
.buttonSegundary:hover{
    background-color: var(--color-grey-2);

}

.buttonThird{
    background-color: var(--color-grey-1);
    padding: 10px;
    color: var(--color-grey-0);
    font-family: 'Inter',sans-serif;
    border: none;
    border-radius: 8px;
    width: 100px;
    cursor: pointer;
    font-size: var(--font-size-title1);
    text-decoration: none;

}

.buttonThird:hover{
    background-color: var(--color-grey-2);
}

input{
    width: 95%;
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    border: none;
    padding: 16px;
    border-radius: 4px;
    font-family: 'Inter',sans-serif;
}

input:focus{
    outline: 1px solid var(--color-grey-0);
}

select{
    width: 95%;
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    border: none;
    padding: 16px;
    border-radius: 4px;
    font-family: 'Inter',sans-serif;
    cursor: pointer;
}

.toastyError{
    background-color: var(--color-grey-2);
}

.toastySucess{
    background-color: var(--color-grey-2);
}

`