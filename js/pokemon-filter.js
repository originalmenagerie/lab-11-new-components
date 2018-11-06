// reference static DOM elements so next lines know about them
const nameInput = document.getElementById('filter-name');
const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');
const shapeInput = document.getElementById('filter-shape');
const speedInput = document.getElementById('filter-speed');
const attackInput = document.getElementById('filter-attack');

const pokemonFilter = {
    // next line is what it needs from parent
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, shapeInput, speedInput, attackInput);
        });

        type1Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, shapeInput, speedInput, attackInput);
        });

        type2Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, shapeInput, speedInput, attackInput);
        });

        shapeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, shapeInput, speedInput, attackInput);
        });

        speedInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, shapeInput, speedInput, attackInput);
        });

        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type1Input.value, type2Input.value, shapeInput, speedInput, attackInput);
        });
    }
};

export default pokemonFilter;