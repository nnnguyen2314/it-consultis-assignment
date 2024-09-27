import {useAppDispatch, useAppSelector} from "@modules/shared/hooks";
import {shallowEqual} from "react-redux";
import {useCallback} from "react";
import {fetchPokemonTypeList, getPokemonTypeListState} from "@modules/pokemon/store/pokemonTypeListSlice";

const usePokemonTypeListService = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector(getPokemonTypeListState, shallowEqual);

    const handleFetchPokemonTypeList = useCallback(() => {
        return dispatch(fetchPokemonTypeList());
    }, [dispatch]);

    return {
        pokemonTypeListSelector: selector,
        handleFetchPokemonTypeList
    }
};

export default usePokemonTypeListService;