let form = document.querySelector("#searchForm");
let searchInput = document.querySelector('#search');
let resultsPage = "./results.html";

// get form data and create variables for the data, run  variables as params for 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let search = searchInput.value;
    let resulsPageWithParams = `${resultsPage}?search=${encodeURIComponent(search)}`;
    location.replace(resulsPageWithParams);
    getArtifactInfo(search);
})


