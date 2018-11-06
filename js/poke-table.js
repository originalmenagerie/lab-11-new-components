const pokeTable = document.getElementById('pokeTable');

function makeTemplate() {
    return '<table id="pokeTable">';
}

class generateTable {
    constructor(pokemon) {
        this.pokemon = pokemon;
        this.html = '<tr><th>Image</th><th>Pokemon Name</th><th>Type_1</th><th>Type_2</th><th>Weight</th><th>Height</th><th>Attack</th></tr><tr>';
    
        this.pokemon.forEach(item => {
            this.html += '<td><img src="assets/pokemon/' + item.id + '.png"></td>';
            this.html += '<td>' + item.pokemon + '</td>';
            this.html += '<td>' + item.type_1 + '</td>';
            this.html += '<td>' + item.type_2 + '</td>';
            this.html += '<td>' + item.weight + '</td>';
            this.html += '<td>' + item.height + '</td>';
            this.html += '<td>' + item.attack + '</td>';
            this.html += '</tr>';
        });
    
        pokeTable.innerHTML = this.html;
    }
};

export default generateTable;