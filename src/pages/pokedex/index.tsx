import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import Card from '../../components/Card';
import Footer from '../../components/Footer';

import { PokemonContext } from '../../contexts/pokemon';

import { numberIsUndefinedOrNullOrNan } from '../../util/numberIsUndefinedOrNullOrNan';

import { Container, Content, Grid, Logo } from "./styles";

export default function Pokedex() {
    const { pokemons, loadPokemons } = useContext(PokemonContext);
    const { query } = useRouter();


    useEffect(() => {
        let limit: number, offset: number;
        limit = Number(query.limit);
        offset = Number(query.offset);
        
        const syncPokemons = async() => await loadPokemons(limit, offset)
        if(!numberIsUndefinedOrNullOrNan(limit) || !numberIsUndefinedOrNullOrNan(offset)){
            syncPokemons();
            return;
        }

    },[query])

    return (
        <Container>
            <Content>
                <Logo src="/logo.png" alt="Logo Pokemon" />
                <Grid>
                    {pokemons.map(({ name, url }, index) => <Card key={index} name={name} url={url} /> )}
                </Grid>
            </Content>
            <Footer />
        </Container>
    )
}
