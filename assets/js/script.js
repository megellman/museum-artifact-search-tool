let resultsContainer = document.querySelector("#resultsContainer");
let form = document.querySelector("#searchForm");
let categoryInput = document.querySelector('#category');
let searchInput = document.querySelector('#search');

// get form data and create variables for the data, run  variables as params for 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let category = categoryInput.value;
    let search = searchInput.value;
    console.log(category, search)
    getArtifactInfo(category, search)
})

// query the api, get the info, create the cards and append them to the container
async function getArtifactInfo(category, search) {
    const apiKey = "fYrROKF8k13AlyBnMGPMdsPaLlRxpWfVUFrNB6ye";

    // get 403 Error when putting API key in header--- keep in URL for now, look into later 
    const url = `https://api.si.edu/openaccess/api/v1.0/category/${category}/search?q=${search}&api_key=${apiKey}`;

    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}