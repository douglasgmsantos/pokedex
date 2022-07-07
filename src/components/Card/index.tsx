import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';

import CardSkeleton from './CardSkeleton';

import { 
    Container, 
    Avatar,
    Header,
    Name,
    ID,
    Types,
    Type,
    Stats,
    StatValue,
    StatKey,
    Stat,
    ContainerStatValue,
    Info
} from './styles';

interface ICardProps {
    name: string;
    url : string;
}

interface IPokemon {
    id: number;
    stats: [{ base_stat: number, stat: { name: string } }]
    stats_formatted: {string : any}
    sprites : {
        front_default: string;
    },
    types: [{
        type: {
            name: string;
        }
    }]
}
  
export default function Card({ name, url } : ICardProps) {
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState<IPokemon | undefined>();
    const [type, setType] = useState<string>("");



    useEffect(() => {
        const loadDetail = async () => {
            try {
                setLoading(true);
                const response = await api().get<IPokemon>(url);
                if(response.status === 200){
                    let pokemonResponse = response.data;
                    let newStat:any = {};
                    
                    pokemonResponse.stats.forEach(stat => {
                        newStat[stat.stat.name as any] = stat.base_stat;
                        pokemonResponse.stats_formatted = newStat as any;
                    })

                    const [type] = pokemonResponse.types;

                    setType(type.type.name);
                    setPokemon({...pokemonResponse, })
                }
                
            } catch (error) {
                console.error("loadDetail", error)
            }finally{
                setLoading(false);
            }
        }

        loadDetail();
    },[url])

    return (
        <>
            {!loading 
                ? ( 
                    <Container type={type}>
                        <Info>
                            <Name type={type} >{name}</Name>
                            <ID type={type}>#{pokemon?.id}</ID>
                        </Info>
                        <Header>
                            <Avatar src={pokemon?.sprites.front_default} type={type} />
                        </Header>
                        <Types>
                            {pokemon?.types.map(({ type:typeItem }) => <Type key={typeItem.name} type={type}> {typeItem.name} </Type>)}
                        </Types>
                        <Stats>
                            {Object.keys(pokemon?.stats_formatted as any || {}).map((key, index) =>  (
                                <Stat key={index}>
                                    <ContainerStatValue>
                                        <StatKey>{key}</StatKey>  
                                        <StatValue type={type} value={pokemon?.stats_formatted[key]} />
                                        <p style={{ marginLeft: "5px", color: "var(--neutral-smoothest)"}}>{pokemon?.stats_formatted[key]}</p>
                                    </ContainerStatValue>
                                </Stat>
                            )) }
                        </Stats>
                    </Container> 
                )
                : ( <CardSkeleton type={"normal"}/> )
            }
        </>
    )
}
