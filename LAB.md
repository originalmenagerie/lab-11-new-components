# Pokedex Explorer

Build a table of pokemon that offers filtering!

The lab has lots of pokemon images plus a core data file located at `js/data/pokedex.js`

## User Stories

* Sees a table of pokemon data
* Can filter on at least five properties
    * must include type (should filter both `type_1` and `type_2`)
    * include at least one number with "minimum" number filter
    * respond to `keyup` event (no form necessary)

## Project Structure

* `assets`
    * `pokemon` images included (_id of pokemon)
* `css`
    * `pokemon-table.css` - _css specific to table component_
    * `pokemon-filter.css` - _css specific to filter component_
    * `styles.css` - _shared css_
* `js`
    * `app.js` - _main entry point_
    * `data`
        * `pokedex.js` - _source data_
    * `html.js` - _helper function for making templates_
    * `pokemon-api.js` - _methods for data_
    * `pokemon-table.js` - _component for table_
    * `pokemon-filter.js` - _component for filter_
* `.eslintrc` - _class eslint with `source-type: "module"`_
* `.travis.yml` - _run linting on travis_
* `index.html` - _html document_
* `README.md` - _info about project_

## Stretch Goals

### Dropdown of Types

* Go through the data and compile an array of unique types
    * Either looping and checking, or
    * See the JavaScript `Set` class
* Populate a dropdown of types and use that value for the type filter

### Add sorting!

Either:

* Offer a radio button property choice plus direction
* Clicking on certain column headers to sort on that property

## Rubric

* App Component inits children and orchestration **2pts**
* Table Component initial render and update **2pts**
* Filter Component with filter "event" **2pts**
* Filter data **3pts**
* Project organization, clean code **1pt**
