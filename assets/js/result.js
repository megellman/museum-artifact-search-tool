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
        
        resultsContainer.innerHTML = "";

        results.forEach((data) => {
            let cardBody = document.createElement("div");
            let title = document.createElement("h5");
            let subtitle = document.createElement('h6');
            let img = document.createElement("img");
            let paragraph = document.createElement("p");
            
            title.textContent = data.title;
            console.log(data.title)
            subtitle.textContent = data.artist_display;
            img.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
            let textOnly = data.description.replace(/<[^>]*>/g, '');
            paragraph.textContent = textOnly;
            cardBody.setAttribute("class", "card-body p-2");
            cardBody.setAttribute("style", "width:40%");
            title.setAttribute("class", "card-title");
            paragraph.setAttribute("class", "card-text");
            img.setAttribute("class", "card-img-top d-block");
            // img.setAttribute("style", "max-width: 30%");
            subtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
        

            cardBody.append(img);
            cardBody.append(subtitle);
            cardBody.append(title);
            cardBody.append(subtitle);
            cardBody.append(paragraph);
            
            resultsContainer.append(cardBody);
        })

    } catch (error) {
        console.error(error.message);
    }
}
