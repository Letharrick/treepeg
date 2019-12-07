const fetch = require('./fetch.js')

// sample input
let base = 'https://data.winnipeg.ca/resource/hfwk-jp4h.json' // winnipeg tree api.
let sampleObj = {
    tree_id: '111111'
}

// call fetch
// ref: Assign Fetch Response To Variable
//      https://www.reddit.com/r/learnjavascript/comments/9zo92w/assign_fetch_response_to_variable/
async function getDataset() {
    let dataset = await fetch.fetchAPI(base, sampleObj).catch((error) => error)
    console.log(dataset)
}