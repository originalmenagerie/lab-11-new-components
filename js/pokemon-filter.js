import PokeApi from './pokemon-api.js';
import GenerateTable from './poke-table.js';

var Pokemon = new PokeApi;

function makeTemplate() {
    return document.getElementById('search');
}

class Filter {
    constructor() {
        this.pokemon = Pokemon.getAll();
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

            var filteredResult = new GenerateTable(filtered);
            filteredResult.render();
        });
    }
}

export default Filter;