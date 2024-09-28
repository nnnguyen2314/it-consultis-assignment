import * as React from 'react';
import {useState} from "react";
import styled from 'styled-components';
import {Flex, Tag, Typography, Space} from 'antd';

const { Title } = Typography;

const StyledPokemonListFilterContainer = styled(Flex)`
    margin-top: 20px;
    margin-bottom: 20px;
    .ant-typography {
      margin-top: 0;
      width: 600px;
      font-weight: 700;
    }
`

const StyledPokemonListFilterWrapper = styled(Flex)`
    .ant-tag {
      &.ant-tag-checkable {
        background-color: #ffffff;
        border: 2px solid #7f1d1d;
        color: #7f1d1d;
        font-weight: 700;
        padding: .5rem;
        font-size: 100%;
      }
    }
`;

interface PokemonListFilterParam {
    pokemonTypeList: any[],
    handleTypeSelected: any,
}

const PokemonTypeFilter = (pokemonTypeListParam: PokemonListFilterParam) => {
    const { pokemonTypeList, handleTypeSelected } = pokemonTypeListParam;
    const [selectedType, setSelectedType] = useState<any>();

    const onTypeSelected = (type: any, checked: boolean) => {
        if (checked) {
            setSelectedType(type);
        } else {
            setSelectedType(null);
        }
        onTypeSelected(type, checked);
    }

    return (
        <StyledPokemonListFilterContainer gap={4} >
            <Title level={3}>Types:</Title>
            <StyledPokemonListFilterWrapper wrap gap={4} align="center">
                {pokemonTypeList.map<React.ReactNode>((type: any) => (
                    <Tag.CheckableTag
                        className={selectedType && selectedType.name === type.name ? 'selected' : ''}
                        key={type?.name}
                        checked={false}
                        onChange={(checked) => {
                            return handleTypeSelected(type, checked);
                        }}
                    >
                        {type?.name}
                    </Tag.CheckableTag>
                ))}
            </StyledPokemonListFilterWrapper>
        </StyledPokemonListFilterContainer>
    )
};

export default PokemonTypeFilter;