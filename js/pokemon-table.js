import html from './html.js';

const tableBody = document.getElementById('pokemon-table-body');

function makeRow(pokemon) {
    return html`<tr id="pokemon-table-body">
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.speed}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.shape}</td>
        <td><img src="assets/pokemon/${pokemon.id}.png">
    </tr>`;
}

const pokemonTable = {
    init: function(pokemon) {
        for(let i = 0; i < pokemon.length; i++) {
            const tr = makeRow(pokemon[i]);
            tableBody.appendChild(tr);
        }
    },
    update(pokemon) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        pokemonTable.init(pokemon);
    }
};

export default pokemonTable;