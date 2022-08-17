import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { Pokemon } from "../models/Pokemon.js";
import { api, pokeAPi } from "./AxiosService.js";

class PokemonService {
    async getPokemon(){
        const res = await pokeAPi.get('')
        logger.log(res.data)
        AppState.pokemon = res.data.results
        AppState.nextPage = res.data.next
        AppState.previousPage = res.data.previous
    }

    async setActive(url){
        const res = await api.get(url)
        logger.log(res.data)
        AppState.activePokemon = new Pokemon(res.data)
        logger.log(AppState.activePokemon)
    }

    async changePage(url){
        const res = await api.get(url)
        logger.log(res.data)
        AppState.pokemon = res.data.results
        AppState.nextPage = res.data.next
        AppState.previousPage = res.data.previous
    }
}



export const pokemonService = new PokemonService()