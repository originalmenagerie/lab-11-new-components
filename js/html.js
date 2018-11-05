export default function html(strings, ...values) {
    // #1 Use the standard "built-in" template literal
    // function that interpolates (mixes in) the 
    // expression values with the strings
    let htmlString = String.raw(strings, ...values);

    // #2 Turn the HTML into DOM

    // A. Create a template element
    var template = document.createElement('template');

    // B. Set it's html prop, which has effect of 
    // browser turing html into DOM
    template.innerHTML = htmlString;

    // C. Use the "content" property to get the DOM
    let dom = template.content;

    return dom;
}