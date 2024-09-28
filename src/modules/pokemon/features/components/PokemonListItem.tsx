import * as React from "react";
import styled from "styled-components";
import {Card, Image} from "antd";
import {POKEMON_IMAGE_URL} from "@modules/pokemon/misc/constants";

const { Meta } = Card;

const StyledPokemonListItemWrapper = styled(Card)`
  background-color: transparent;
  width: 110px;
  border: none;

  .ant-card-cover {
    width: 100%;
    margin: auto;
    img {
      width: 100%;
      min-height: 110px;
    }
  }
  .ant-card-body {
    text-align: center;
    padding: 24px 0;
    .ant-card-meta-title {
      padding: 10px 0;
      text-overflow: unset;
      white-space: normal;
    }
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