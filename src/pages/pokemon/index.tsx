import React, { useContext, useEffect } from 'react';

import Card from '../../components/Card';

import { PokemonContext } from '../../contexts/pokemon';

import { Container, Content } from "./styles";

export default function Pokemon() {
    const { pokemons, loadPokemons } = useContext(PokemonContext);

    useEffect(() => {
        loadPokemons();
    },[])

    return (
        <Container>
            <Content>
                {pokemons.map(({ name, url }) => <Card name={name} url={url} /> )}
            </Content>
        </Container>
    )
}
