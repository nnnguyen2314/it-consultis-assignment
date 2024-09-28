import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {get} from "lodash";
import api from "@modules/pokemon/misc/api";

export interface PokemonTypeListState {
    pokemonTypeList: any[];
    loading: boolean;
    message: string;
};

const initialState = {
    pokemonTypeList: [],
    loading: false,
    message: ''
};
export const stateKey = 'pokemonTypeList';

export const fetchPokemonTypeList = createAsyncThunk(
    'POKEMON/FETCH_POKEMON_TYPE_LIST',
    async () => {
        return await api.fetchPokemonTypeList();
    });

export const pokemonTypeListSlice = createSlice({
    name: stateKey,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonTypeList.pending, (state: PokemonTypeListState, action):void => {state.loading = true})
        builder.addCase(fetchPokemonTypeList.fulfilled, (state: PokemonTypeListState, action):void => {
            const pokemonTypeListData = action?.payload?.data;
            state.pokemonTypeList = pokemonTypeListData?.results || [];
            state.loading = false;
            state.message = 'Request Successfully!';
        })
        builder.addCase(fetchPokemonTypeList.rejected, (state: PokemonTypeListState, action):void => {
            state.loading = false;
            state.message = 'Request Failed!';
        })
    }
});

export const getPokemonTypeListState = (state: PokemonTypeListState) => {
    const pokemonTypeListState = get(state, stateKey, initialState);
    const pokemonTypeList = get(pokemonTypeListState, 'pokemonTypeList', initialState.pokemonTypeList || []);
    const loading = get(pokemonTypeListState, 'loading', initialState.loading);
    const message = get(pokemonTypeListState, 'message', initialState.message);

    return {
        pokemonTypeList,
        loading,
        message
    };
};

export default pokemonTypeListSlice.reducer;
