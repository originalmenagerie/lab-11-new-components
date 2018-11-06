import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

var pokemon = new pokeApi;

class filter {
    
    constructor() {
        this.search = document.getElementById('search');
        this.pokemon = pokemon.getAll();
        
        this.search.addEventListener('keyup', () => {
            this.filtered = [];
            this.selText = document.querySelector('option[name="selectText"]:checked');
            this.selNum = document.querySelector('option[name="selectNum"]:checked');
            this.textBox = document.getElementById('textBox');
            this.numBox = document.getElementById('numBox');
            
            this.pokemon.forEach(item => {
                if(item[this.selText.value].includes(this.textBox.value) && item[this.selNum.value] >= parseInt(this.numBox.value)) {
                    this.filtered.push(item);
                }
            });
            
            this.filteredResult = new generateTable(this.filtered);
        });
    }
};

export default filter;