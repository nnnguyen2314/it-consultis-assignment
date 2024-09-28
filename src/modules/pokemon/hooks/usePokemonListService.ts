import {useAppDispatch, useAppSelector} from "@modules/shared/hooks";
import {shallowEqual} from "react-redux";
import {useCallback} from "react";
import {
    fetchPokemonList,
    doFilteringPokemonList,
    getPokemonListState,
    doPagingPokemonList
} from "@modules/pokemon/store/pokemonListSlice";

const usePokemonListService = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(getPokemonListState, shallowEqual);

    const handleFetchPokemonList = useCallback((queryParams: any) => {
        return dispatch(fetchPokemonList(queryParams));
    }, [dispatch]);

    const handleDoPagingPokemonList = useCallback((pagingUrl: any) => {
        return dispatch(doPagingPokemonList(pagingUrl));
    }, [dispatch]);

    const handleDoFilterPokemonList = useCallback((typeId: number) => {
        return dispatch(doFilteringPokemonList(typeId));
    }, [dispatch]);

    return {
        pokemonListSelector: selector,
        handleFetchPokemonList,
        handleDoPagingPokemonList,
        handleDoFilterPokemonList
    }
};

export default usePokemonListService;