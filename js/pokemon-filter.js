import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

var pokemon = new pokeApi;

function makeTemplate() {
    return document.getElementById('search');
}

class filter {
    constructor() {
        this.pokemon = pokemon.getAll();
    }
    
    render() {
       const search = makeTemplate();
        
        search.addEventListener('keyup', () => {
            let filtered = [];
            let selText = document.querySelector('option[name="selectText"]:checked');
            let selNum = document.querySelector('option[name="selectNum"]:checked');
            let textBox = document.getElementById('textBox');
            let numBox = document.getElementById('numBox');
            let compareNum = '0';

            if(numBox.value){
                compareNum = numBox.value;
            }

            if(textBox.value === '' && numBox.value === ''){
                filtered = this.pokemon;
            } else {
                this.pokemon.forEach(item => {
                    if(item[selText.value].includes(textBox.value) && item[selNum.value] >= parseInt(compareNum)) {
                        filtered.push(item);
                    }
                });
            }

            var filteredResult = new generateTable(filtered);
            filteredResult.render();
        });
    }
};

export default filter;