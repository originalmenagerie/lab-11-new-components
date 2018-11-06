const pokeTable = document.getElementById('pokeTable');

function makeTemplate() {
    var html = `
        <tr>
            <th>Image</th>
            <th>Pokemon Name</th>
            <th>Type_1</th>
            <th>Type_2</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Attack</th>
        </tr>
        `;
    return html;
}

class generateTable {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }
       
    render() {
        this.html = makeTemplate();
        this.pokemon.forEach(item => {
            this.html += `
                <tr>
                    <td><img src="assets/pokemon/${item.id}.png"></td>
                    <td>${item.pokemon}</td>
                    <td>${item.type_1}</td>
                    <td>${item.type_2}</td>
                    <td>${item.weight}</td>
                    <td>${item.height}</td>
                    <td>${item.attack}</td>
                </tr>
            `;
        });
    
        pokeTable.innerHTML = this.html;
    }
};

export default generateTable;