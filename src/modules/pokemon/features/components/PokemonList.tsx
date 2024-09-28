import * as React from "react";
import styled from "styled-components";
import {Button, Col, Row, Space} from "antd";
import PokemonListItem from "@modules/pokemon/features/components/PokemonListItem";

const StyledPokemonListPagingWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  .ant-btn {
    border-radius: .375rem;
    background-color: #7F1D1D;
    color: #ffffff;
    padding-top: 17px;
    padding-bottom: 20px;
    margin-top: 10px;
    margin-bottom: 30px;
    
    &:disabled {
      opacity: .4;
    }
  }
`;

interface PokemonListParam {
    pokemonList: any[],
    total: number,
    next: string,
    previous: string,
    handleDoPagingPokemonList: any,
    isFiltering: boolean
}

const PokemonList = (pokemonListParam: PokemonListParam) => {
    const onFetchNext = () => {
        pokemonListParam.handleDoPagingPokemonList(pokemonListParam?.next);
    };

    const onFetchPrevious = () => {
        pokemonListParam.handleDoPagingPokemonList(pokemonListParam?.previous);
    };

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <Space size={[8, 16]} wrap>
                            {
                                pokemonListParam?.pokemonList.map((pokemon: any, index: number) => {
                                    return <PokemonListItem pokemonListItemData={pokemon} key={index} />
                                })
                            }
                        </Space>
                    </Col>
                </Row>
                {!pokemonListParam?.isFiltering && pokemonListParam?.pokemonList && (
                    <StyledPokemonListPagingWrapper>
                        <Col>
                            <Space size="middle">
                                <Button disabled={!pokemonListParam?.previous} onClick={onFetchPrevious}>Previous</Button>
                                <Button disabled={!pokemonListParam?.next} onClick={onFetchNext}>Next</Button>
                            </Space>
                        </Col>
                    </StyledPokemonListPagingWrapper>
                )}
            </Col>
        </Row>
    )
};

export default PokemonList;