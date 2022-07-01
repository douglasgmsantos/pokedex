import React from 'react';
import { PokemonProvider } from './pokemon';


const AppProvider: React.FC<any> = ({ children } : any) => {
    return (
        <PokemonProvider>
            {children}
        </PokemonProvider>
    )
};

export default AppProvider;