import pokeData from './data/pokedex.js';


class PokeApi {
    getAll() {
        return pokeData;
    }
}

export default PokeApi;