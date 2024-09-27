import * as React from "react";
import styled from "styled-components";
import {Card, Image} from "antd";
import {POKEMON_IMAGE_URL} from "@modules/pokemon/misc/constants";

const { Meta } = Card;

const StyledPokemonListItemWrapper = styled(Card)`
    background-color: transparent;
    .ant-card-cover {
      img {
        width: 100px;
        height: 100px;
      }
    }
    .ant-card-body {
      padding: 10px 0;
      text-align: center;
    }
`;

interface PokemonListItemParamType {
    pokemonListItemData: any
}

const PokemonListItem = (pokemonListItemParam: PokemonListItemParamType) => {
    const { name, url } = pokemonListItemParam?.pokemonListItemData;
    const imageId = url.split('/')[url.split('/').length - 2];

    return (
        <StyledPokemonListItemWrapper
            cover={
            <img alt={name} src={`${POKEMON_IMAGE_URL}/${imageId}.png`} />
        }
        >
            <Meta title={name} />
        </StyledPokemonListItemWrapper>
    );
};

export default PokemonListItem;