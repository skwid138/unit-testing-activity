function makeTitle(str) {
    if (typeof (str) !== 'string') {
        throw new TypeError('Not a String! expects a string', "capitalize.js");
    } else {
    return str
    // splits string at spaces
        .split(' ')
        //creates an array with the new split up words
        // runs function on them
        .map(function(word) {
            // returns each word capitalized and 
            // adds the remaining letters back to the string
            return word[0].toUpperCase() + word.substr(1);
        }) // end map
        // adds string of words back together into a single string
        .join(' ');
    } // end else
} // end makeTitle

module.exports = makeTitle;
