import  styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    
    margin-top: 5rem;

    background: var(--neutral-stronger);

    p {
        color: var(--neutral-smoother);
    }

    svg {
        width: 3rem;
        height: 3rem;

        color: var(--neutral-smooth);

        margin: 2rem;

        cursor: pointer;
    }
`;

export const Links = styled.div``;