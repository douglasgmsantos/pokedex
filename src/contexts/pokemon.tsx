import { createContext, useState, ReactNode, useEffect, useCallback } from "react";

import { api } from "../services/api";


interface IPokemonProvider {
  children: ReactNode
}

interface IQueryParams {
    search: string;
}

interface IPokemonResult {
    count: number;
    next: string;
    previous: number;
    results: IPokemon[]
}

interface IPokemon {
    name : string;
    url : string;
}

interface PokemonContext {
  loading: boolean;
  pokemons: IPokemon[];
  loadPokemons(limit?: number, offset?: number): Promise<void>;
}

const PokemonContext = createContext<PokemonContext>({} as PokemonContext);

const PokemonProvider = ({ children }: IPokemonProvider) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadPokemons = useCallback(async (limit: number = 151, offset: number = 0) => {
    try {
      setLoading(true);
      const response = await api().get<IPokemonResult>("/pokemon", { params: { limit, offset } });
      if(response.status != 200)
        throw response

      setPokemons(response.data.results)
    } catch (error: any) {
      new Error(error)
    }finally{
      setLoading(false);
    }
  },[])
  
  return (
    <PokemonContext.Provider value={{
      loading,
      pokemons,
      loadPokemons
    }}>
      {children}
    </PokemonContext.Provider>
  )
}


export { PokemonProvider, PokemonContext };