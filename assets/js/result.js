let resultsContainer = document.querySelector("#resultsContainer");
let form = document.querySelector("#searchForm");
let searchInput = document.querySelector('#search');

// query the api, get the info, create the cards and append them to the container
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let search = params.get('search');
    if(search)getArtifactInfo(search);
}
async function getArtifactInfo(search) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,description,artist,artist_display,place_of_origin,image_id,date_display,color,style_title,short_description`;
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
            // if no photo, use no photo stock image
            if(data.image_id){
                img.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
                
                // if image does not load, replace with no photo available stock image
                img.onerror = function() {
                    this.onerror = null;
                    this.src = "./assets/images/no-picture.png";
                }
            } else {
                img.src = "./assets/images/no-picture.png";
            }
            img.setAttribute("class", "card-img-top d-block");
                img.setAttribute("alt", `Image of ${data.title}`);
                cardBody.append(img);
            let paragraph = document.createElement("p");
            
            title.textContent = data.title;
            subtitle.textContent = data.artist_display;
            let regex = /<[^>]*>/g;
            let textOnly;
            if(regex.test(data.description)){
                textOnly = data.description.replace(/<[^>]*>/g, '');
            } else {
                textOnly = data.description;
            }
            paragraph.textContent = textOnly;
            cardBody.setAttribute("class", "card-body");
            cardBody.setAttribute("style", "max-width: 50%; min-height: 800px");
            title.setAttribute("class", "card-title");
            paragraph.setAttribute("class", "card-text");
            
            subtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
        

            
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