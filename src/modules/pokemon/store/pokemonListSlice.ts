import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {get} from "lodash";
import api from "@modules/pokemon/misc/api";

export interface PokemonListState {
    pokemonList: any[];
    total: number;
    loading: boolean;
    message: string;
};

const initialState = {
    pokemonList: [],
    total: 0,
    loading: false,
    message: ''
};
export const stateKey = 'pokemonList';

export const fetchPokemonList = createAsyncThunk(
    'POKEMON/FETCH_POKEMON_LIST',
    async (queryParams: any) => {
        return await api.fetchPokemonList(queryParams);
    });

export const doFilteringPokemonList = createAsyncThunk(
    'POKEMON/DO_FILTERING_POKEMON_LIST',
    async (typeId: number) => {
        return await api.doFilteringPokemonList(typeId);
    });

export const pokemonListSlice = createSlice({
    name: stateKey,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonList.pending, (state: PokemonListState, action):void => {state.loading = true})
        builder.addCase(fetchPokemonList.fulfilled, (state: PokemonListState, action):void => {
            const pokemonListData = action?.payload?.data;
            state.pokemonList = pokemonListData?.results || [];
            state.total = pokemonListData?.count || [];
            state.loading = false;
            state.message = 'Request Successfully!';
        })
        builder.addCase(fetchPokemonList.rejected, (state: PokemonListState, action):void => {
            state.loading = false;
            state.message = 'Request Failed!';
        })
        builder.addCase(doFilteringPokemonList.pending, (state: PokemonListState, action):void => {state.loading = true})
        builder.addCase(doFilteringPokemonList.fulfilled, (state: PokemonListState, action):void => {
            const pokemonListData = action?.payload?.data;
            state.pokemonList = pokemonListData?.results || [];
            state.loading = false;
            state.message = 'Request Successfully!';
        })
        builder.addCase(doFilteringPokemonList.rejected, (state: PokemonListState, action):void => {
            state.loading = false;
            state.message = 'Request Failed!';
        })
    }
});

export const getPokemonListState = (state: PokemonListState) => {
    const pokemonListState = get(state, stateKey, initialState);
    const pokemonList = get(pokemonListState, 'pokemonList', initialState.pokemonList || []);
    const total = get(pokemonListState, 'total', initialState.total || 0);
    const loading = get(pokemonListState, 'loading', initialState.loading);
    const message = get(pokemonListState, 'message', initialState.message);

    return {
        pokemonList,
        total,
        loading,
        message
    };
};

export default pokemonListSlice.reducer;
