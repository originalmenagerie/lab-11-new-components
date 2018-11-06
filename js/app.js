import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';


// get initial data
const pokemon = pokemonApi.getAll();

// first display total pokemon count
var pokemonCount = pokemon.length;
var countDisplay = document.getElementById('total-count');
if(pokemonCount === 801) {
    countDisplay.textContent = pokemonCount;
}

// send data downward
pokemonTable.init(pokemon);

// now send the events up
pokemonFilter.init(function(nameFilter, type1Filter, type2Filter, shapeFilter, speedFilter, attackFilter) {

    let filtered;

    if(nameFilter || type1Filter || type2Filter || shapeFilter || speedFilter || attackFilter) {

        nameFilter = nameFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();
        shapeFilter = shapeFilter.value.toLowerCase();
        speedFilter = speedFilter.value;
        attackFilter = attackFilter.value;

        filtered = pokemon.filter(function(pokemon) {

            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter);
            const hasType1 = !type1Filter 
                || pokemon.type_1.toLowerCase().includes(type1Filter);
            const hasType2 = !type2Filter
                || pokemon.type_2.toLowerCase().includes(type2Filter);
            const hasShape = !shapeFilter
                || pokemon.shape.toLowerCase().includes(shapeFilter);
            const hasSpeed = !speedFilter
                || pokemon.speed >= speedFilter;
            const hasAttack = !attackFilter
                || pokemon.attack >= attackFilter;

            return hasName && hasType1 && hasType2 && hasShape && hasSpeed && hasAttack;
        });
    }
    else {
        // if no then display the full unfiltered list
        filtered = pokemon;
    }

    // if filtered, display total filtered count instead of total pokemon count
    var filteredCount = filtered.length;
    if(filteredCount !== 801) {
        countDisplay.textContent = filtered.length;
    }
    else {
        countDisplay.textContent = pokemonCount;
    }
    // if 0 result after filter, hide column headings
    var columnHeadings = document.getElementById('column-headings');
    if(filteredCount === 0) {
        columnHeadings.classList.add('hidden');
    }
    else columnHeadings.classList.remove('hidden');

        // hey table, update!
    pokemonTable.update(filtered);
});