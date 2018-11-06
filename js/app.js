import PokeApi from './pokemon-api.js';
import GenerateTable from './poke-table.js';
import Filter from './pokemon-filter.js';

var pokemon = new PokeApi;
pokemon = pokemon.getAll();

const genTable = new GenerateTable(pokemon);
genTable.render();

const filterCall = new Filter;
filterCall.render();