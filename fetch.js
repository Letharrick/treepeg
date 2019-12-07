// install reference 
// - https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");

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

// input: api base link, JSON parameters (sampleJsonObj = { tree_id: '111111' })
// output: JSON object
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

// for node.js, such that fetchAPI can be called from other files.
module.exports = {
    fetchAPI
}