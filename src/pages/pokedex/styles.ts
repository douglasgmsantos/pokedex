import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .infinite-scroll-component__outerdiv{
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 35rem;
`;

export const Grid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-auto-rows: minmax(min-content, max-content);

    padding: 0 1rem;

    justify-content: center;
`;