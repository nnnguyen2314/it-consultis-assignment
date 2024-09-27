import {useAppDispatch, useAppSelector} from "@modules/shared/hooks";
import {shallowEqual} from "react-redux";
import {useCallback} from "react";
import { fetchPokemonList, doFilteringPokemonList, getPokemonListState } from "@modules/pokemon/store/pokemonListSlice";

const usePokemonListService = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(getPokemonListState, shallowEqual);

    const handleFetchPokemonList = useCallback((queryParams: any) => {
        return dispatch(fetchPokemonList(queryParams));
    }, [dispatch]);

    const handleDoFilterPokemonList = useCallback((typeId: number) => {
        return dispatch(doFilteringPokemonList(typeId));
    }, [dispatch]);

    return {
        pokemonListSelector: selector,
        handleFetchPokemonList,
        handleDoFilterPokemonList
    }
};

export default usePokemonListService;