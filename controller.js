const fetch = require('./fetch.js')

// sample input
let base = 'https://data.winnipeg.ca/resource/hfwk-jp4h.json' // winnipeg tree api.
let sampleObj = {
    tree_id: '111111'
}

// call fetch
fetch.fetchAPI(base, sampleObj)
    .then(data => console.log(data))
    .catch((error) => error)