import styled from 'styled-components'

export const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6rem;
    height: 6rem;

    position: fixed;
    bottom: 20px;
    right: 20px;

    background: var(--neutral-smoother);
    color: var(--neutral-strongest);

    border-radius: 50%;

    cursor: pointer;

    svg {
        color: var(--neutral-strongest);
    }
    
`;