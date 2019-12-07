// install reference 
// - https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");

let sampleObj = {
    tree_id: '111111',
    // botanical_name: 'Ulmus americana',
    // common_name: 'American Elm',
    // electoral_ward: 'Transcona',
    // neighbourhood: 'KILDARE-REDONDA',
    // diameter_at_breast_height: '70',
    // park: 'Not In Park',
    // location_class: 'Boulevard',
    // property_type: 'Public',
    // x_street_from: 'Leola St',
    // x_street_to: 'Wabasha St',
    // x: '644081.050970596',
    // y: '5529566.34603522',
    // ded_tag_number: '19-3425',
    // location: {
    //     latitude: '49.90111470307363',
    //     longitude: '-96.99362091329408',
    //     human_address: '{"address": "", "city": "", "state": "", "zip": ""}'
    // }
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
function fetchAPI(base, jsonObj) {

    // pre-condition checking
    base += (base.endsWith('?')) ? ('') : ('?')

    // parse input json object to string for querying
    let str = parseJsonToStr(jsonObj)
    
    // concatenate api base url with the args string
    let query = base + str

    console.log(query)

    fetch(query)
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0) {
                console.log("[*][Testing] There exists results.")
                
                // process results
                console.log(data[0])
                return (data[0])

            } else {
                console.log("[*][Testing] There exists no results.")
                return null
            }
        })
        .catch((err) => console.log(err))
}

// base url of winnipeg tree api.
let base = 'https://data.winnipeg.ca/resource/hfwk-jp4h.json?'
let result = fetchAPI(base, sampleObj)
// console.log(result)