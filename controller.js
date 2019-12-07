// const fetch = require('./fetch.js') //[Node.js Version]

// sample input
let base = 'https://data.winnipeg.ca/resource/hfwk-jp4h.json' // winnipeg tree api.
let sampleObj = {
    tree_id: '111111'
}

async function onClickHandler() {
    let listNode = document.createElement("li");
    let textNode = document.createTextNode("Added List Elements...");
    listNode.appendChild(textNode);
    document.getElementById("list").appendChild(listNode);

    let dataset = await fetchAPI(base, sampleObj).catch((error) => error)
    console.log(dataset);
}


// ref: Assign Fetch Response To Variable
//      https://www.reddit.com/r/learnjavascript/comments/9zo92w/assign_fetch_response_to_variable/
// async function getDataset() {
//     let dataset = await fetchAPI(base, sampleObj).catch((error) => error)
//     // let dataset = await fetch.fetchAPI(base, sampleObj).catch((error) => error) //[Node.js Version]
//     console.log(document.getElementById("list"));
// }