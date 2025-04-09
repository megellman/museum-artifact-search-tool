let resultsContainer = document.querySelector("#resultsContainer");

// query the api, get the info, create the cards and append them to the container
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let search = params.get('search');
    if(search)getArtifactInfo(search);
}
async function getArtifactInfo(search) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,description,artist,artist_display,place_of_origin,image_id,date_display,color,style_title,short_description`;
    console.log(url)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json = await response.json();
        let results = json.data;
        console.log(results)
        
        results.forEach((data) => {
            let cardContainer = document.createElement("div");
            let cardBody = document.createElement("div");
            let title = document.createElement("h5");
            let subtitle = document.createElement('h6');
            let img = document.createElement("img");
            let paragraph = document.createElement("p");

            console.log(data.description)
            
            cardContainer.setAttribute("class", "card");
            cardBody.setAttribute("class", "card-body");
            title.setAttribute("class", "card-title");
            subtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
            paragraph.setAttribute("class", "card-text");
            
            title.textContent = data.title;
            subtitle.textContent = data.artist_display;
            img.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
            img.setAttribute("class", "card-img-top");
            let textOnly = data.description.replace(/<[^>]*>/g, '');
            paragraph.textContent = textOnly;

            resultsContainer.append(cardContainer);
            cardContainer.append(cardBody);
            cardBody.append(title);
            cardBody.append(subtitle);
            cardBody.append(paragraph);
            cardBody.append(img);
        })

    } catch (error) {
        console.error(error.message);
    }
}
