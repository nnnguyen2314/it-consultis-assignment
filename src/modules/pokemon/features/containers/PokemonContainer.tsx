import * as React from 'react';
import {useEffect, useState} from "react";
import usePokemonTypeListService from "@modules/pokemon/hooks/usePokemonTypeListService";
import usePokemonListService from "@modules/pokemon/hooks/usePokemonListService";
import PokemonTypeFilter from "@modules/pokemon/features/components/PokemonTypeFilter";
import PokemonList from "@modules/pokemon/features/components/PokemonList";

const PokemonContainer = () => {
    const { pokemonTypeListSelector, handleFetchPokemonTypeList } = usePokemonTypeListService();
    const { pokemonListSelector, handleFetchPokemonList, handleDoFilterPokemonList  } = usePokemonListService();

    const onPokemonTypeSelected = (type: any, checked: boolean) => {
        console.log(type);
    }

    useEffect(() => {
        handleFetchPokemonTypeList();
        handleFetchPokemonList({offset: 0, limit: 102});
    }, []);

    return (
        <div>
            <PokemonTypeFilter handleTypeSelected={onPokemonTypeSelected} pokemonTypeList={pokemonTypeListSelector.pokemonTypeList}/>
            <PokemonList pokemonList={pokemonListSelector.pokemonList} limit={0} offset={0} total={pokemonListSelector.total}/>
        </div>
    )
};

export default PokemonContainer;