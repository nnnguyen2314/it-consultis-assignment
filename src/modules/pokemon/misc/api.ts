import CustomAxios from '@modules/shared/middlewares/customAxios';
import {POKEMON_LIST_API_URL, TYPE_LIST_API_URL} from './constants';

const api = {
    fetchPokemonList: (queryParams: any) => {
        const {limit, offset} = queryParams;
        return CustomAxios.get(`${POKEMON_LIST_API_URL}?limit=${limit}&offset=${offset}`);
    },
    fetchPagingPokemonList: (pagingUrl: string) => {
        return CustomAxios.get(pagingUrl);
    },
    doFilteringPokemonList: (typeId: number) => CustomAxios.get(`${TYPE_LIST_API_URL}/${typeId}`),
    fetchPokemonTypeList: () => CustomAxios.get(TYPE_LIST_API_URL)
};

export default api;
