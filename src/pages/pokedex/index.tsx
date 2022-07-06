import React, { useCallback, useContext, useEffect, useState } from 'react';

import InfiniteScroll from "react-infinite-scroll-component";

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import ScrollPage from '../../components/ScrollTopPage';

import { PokemonContext } from '../../contexts/pokemon';

import { Container, Content, Grid, Logo } from "./styles";

export default function Pokedex() {
    const [limit, setlimit] = useState(15)
    const { pokemons, loadPokemons } = useContext(PokemonContext);
    
    useEffect(() => {
        loadPokemons(limit)
    },[limit])

    const morePokemons = useCallback(() => {
        setlimit(limit + 15)
    },[limit])

    return (
        <Container>
            <Content>
                <Logo src="/logo.png" alt="Logo Pokemon" />
                <InfiniteScroll
                    
                    style={{ width: "100%" }}
                    dataLength={pokemons.length}
                    next={morePokemons}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <Grid>
                        {pokemons.map(({ name, url }, index) => <Card key={index} name={name} url={url} /> )}
                    </Grid>
                </InfiniteScroll>
            </Content>
            <Footer />
            <ScrollPage />
        </Container>
    )
}
