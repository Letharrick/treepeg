// install reference 
// - https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");

let sampleObj = {
    tree_id: '111111'
}

// last '&' does not affect the query, so acceptable
function parseJsonToStr(obj) {
    let str = ""
    for (key in obj) {
        if (typeof obj[key] == "object") {
            str += parseJsonToStr(obj[key]);
        } else {
            str += (obj[key] === null) ? ("") : (key + '=' + obj[key] + '&')
        }
    }
    return str
}

// input: one big JSON object
async function fetchAPI(base, jsonObj) {

    let query = base
    let str = parseJsonToStr(jsonObj)                // parse input json object to string for querying
    query += ((query.endsWith('?')) ? ('') : ('?'))  // pre-condition checking
    query += str                                     // concatenate api base url with the args string

    console.log(query)

    const response = await fetch(query);        // fetch from the api
    const responseJson = await response.json(); // parse JSON to JS objects 
    return responseJson[0]

}

// base url of winnipeg tree api.
let base = 'https://data.winnipeg.ca/resource/hfwk-jp4h.json'
fetchAPI(base, sampleObj)
    .then(data => console.log(data))