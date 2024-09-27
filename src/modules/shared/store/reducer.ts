import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

// import videoSlice from '@modules/video/store/videoSlice';
import pokemonListSlice from '@modules/pokemon/store/pokemonListSlice';
import pokemonTypeListSlice from '@modules/pokemon/store/pokemonTypeListSlice';

export const combinedReducer = combineReducers({
    pokemonList: pokemonListSlice,
    pokemonTypeList: pokemonTypeListSlice,
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export default reducer;