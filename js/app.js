import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';
import filter from './pokemon-filter.js';

var pokemon = new pokeApi;
pokemon = pokemon.getAll();

const genTable = new generateTable(pokemon);

const filterCall = new filter;




