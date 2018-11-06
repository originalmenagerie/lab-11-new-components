import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

var pokemon = new pokeApi;

pokemon = pokemon.getAll();
class filter {
    constructor() {
        this.search = document.getElementById('search');
        
        this.search.addEventListener('keyup', () => {
            this.filtered = [];
            this.selText = document.querySelector('option[name="selectText"]:checked');
            this.selNum = document.querySelector('option[name="selectNum"]:checked');
            this.textBox = document.getElementById('textBox');
            this.numBox = document.getElementById('numBox');
            this.compareNum = '0';

            console.log(this.selText.value, this.textBox.value);
            console.log(this.selNum.value, this.numBox.value);
            
            if(this.numBox.value){
                this.compareNum = this.numBox.value;
            }

            if(this.textBox.value === '' && this.numBox.value === ''){
                this.filtered = pokemon;
            } else {
                pokemon.forEach(item => {
                    if(item[this.selText.value].includes(this.textBox.value) && item[this.selNum.value] >= parseInt(this.compareNum)) {
                        this.filtered.push(item);
                    }
                });
            }

            this.filteredResult = new generateTable(this.filtered);
            this.filteredResult.render();
        });
    }
};

export default filter;