import * as React from "react";
import styled from "styled-components";
import { Space } from "antd";
import PokemonListItem from "@modules/pokemon/features/components/PokemonListItem";

interface PokemonListParam {
    pokemonList: any[],
    total: number,
    offset: number,
    limit: number
}

const PokemonList = (pokemonListParam: PokemonListParam) => {
    return (
        <Space size={[8, 16]} wrap>
            {
                pokemonListParam?.pokemonList.map((pokemon: any, index: number) => {
                    return <PokemonListItem pokemonListItemData={pokemon} key={index} />
                })
            }
        </Space>
    )
};

export default PokemonList;