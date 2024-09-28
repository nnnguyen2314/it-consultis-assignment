import * as React from 'react';
import {useEffect, useState} from "react";
import usePokemonTypeListService from "@modules/pokemon/hooks/usePokemonTypeListService";
import usePokemonListService from "@modules/pokemon/hooks/usePokemonListService";
import PokemonTypeFilter from "@modules/pokemon/features/components/PokemonTypeFilter";
import PokemonList from "@modules/pokemon/features/components/PokemonList";
import {Spin} from "antd";

const PokemonContainer = () => {
    const { pokemonTypeListSelector, handleFetchPokemonTypeList } = usePokemonTypeListService();
    const { pokemonListSelector, handleFetchPokemonList, handleDoFilterPokemonList, handleDoPagingPokemonList  } = usePokemonListService();
    const [selectedTypeId, setSelectedTypeId] = useState<any>(null);

    const onPokemonTypeSelected = (type: any) => {
        if (type) {
            const typeId = type?.url.split('/')[type?.url.split('/').length - 2];
            setSelectedTypeId(typeId);
        } else {
            setSelectedTypeId(null);
        }
    }
    useEffect(() => {
        handleFetchPokemonTypeList();
    }, []);

    useEffect(() => {
        if (!selectedTypeId) {
            handleFetchPokemonList({offset: 0, limit: 48});
        } else {
            handleDoFilterPokemonList(selectedTypeId);
        }
    }, [selectedTypeId]);

    return (
        <div>
            <Spin spinning={pokemonTypeListSelector.loading}>
                <PokemonTypeFilter handleTypeSelected={onPokemonTypeSelected} pokemonTypeList={pokemonTypeListSelector.pokemonTypeList}/>
            </Spin>
            <Spin spinning={pokemonListSelector.loading}>
                <PokemonList pokemonList={pokemonListSelector.pokemonList}
                             next={pokemonListSelector.next}
                             previous={pokemonListSelector.previous}
                             total={pokemonListSelector.total}
                             handleDoPagingPokemonList={handleDoPagingPokemonList}
                             isFiltering={!!selectedTypeId}/>
            </Spin>
        </div>
    )
};

export default PokemonContainer;