import styled, { css } from 'styled-components';

interface IContainer {
    type: string;
}

export const Container = styled.div<IContainer>`
    height: 43rem;

    border-radius: 10px;

    border: 2px solid var(--type-${({type} ) => type});
    -moz-box-shadow: inset 5px 5px 30px var(--type-${({type} ) => type});
    -webkit-box-shadow: inset 5px 5px 30px var(--type-${({type} ) => type});
    box-shadow: inset 5px 5px 30px var(--type-${({type} ) => type});  

    padding: 1rem;
`;

export const ContainerLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0.5rem;

    font-size: 2rem;
`;

interface IID {
    type: string;
}
export const ID = styled.div<IID>`
    color: var(--type-${({type} ) => type});
    font-weight: bold;
`;

interface IName {
    type: string;
}

export const Name = styled.p<IName>`
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    
    width: 100%;

    color: var(--type-${({type} ) => type});

    text-transform: capitalize;
`;

interface IAvatar {
    type:  string;
}

export const Avatar = styled.img<IAvatar>`
    border: 0;
    color: var(--type-${({type} ) => type});
    box-shadow: 0 0 1em var(--type-${({type} ) => type}),inset 0 0 .8em var(--type-${({type} ) => type});

    filter: drop-shadow(0 0 50px var(--type-${({type} ) => type}));

    border-radius: 50%;
    margin: 0.5rem;

    animation: animate 2.5s linear infinite;

    @keyframes animate{
        0% {
            filter: drop-shadow(0 0 40px);
        }
        50% {
            filter: drop-shadow(0 0 10px);
        }
        100% {
            filter: drop-shadow(0 0 40px);
        }
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
`;

export const Types = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`;

interface IType {
    type: string;
}

export const Type = styled.div<IType>`
    width: 8.0rem;

    display: flex;
    justify-content: center;

    border: 2px solid var(--type-${({type} ) => type});
    
    margin: 0 0.1rem;
    padding: 0.7rem;
    
    border-radius: 10px;

    font-weight: 700;
    text-transform: capitalize;

    color: var(--neutral-smooth);
`;

export const Stats = styled.div`
    height: 1rem;
    padding: 0.5rem 1rem;

`;

export const Stat = styled.div`
    margin: 0.5rem 0;
`;

export const StatKey = styled.div`
    width: 20rem;
    margin: 0.5rem 0;

    color: var(--neutral-smoothest);
`;

export const ContainerStatValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface StatValue {
    value : number;
    type: string;
}

export const StatValue = styled.div<StatValue>`
    width: ${({ value }) => ((value*100)/255)
 }%;
    background: var(--type-${({type} ) => type});
    height: 0.7rem;
    margin-left: 0.1rem;
    border-radius: 10px;
`;

