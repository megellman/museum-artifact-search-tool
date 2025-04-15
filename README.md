# Museum Artifact Search Tool
I created a museum artifact tool that allows a user to search art based on a keyword and have it displayed on a new page using HTML, JavaScript, Bootstrap, Google Fonts, and the Art Institute of Chicago API.


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## Features

### Search Form: 
* A browser event listener is attached to the form to execute a function on submission. This will capture both form values (query and category) and redirect the user to a search results page with those values included in the URL as query parameters. Search form exists on both the homepage and the results page so the user can search new artists or keywords from the results page. 

### Results Page:
* On page load, if there are query parameters, they are parsed and used to construct a request URL to fetch data from the museum’s API. The response from the API request will be displayed on the page.

## Demo

[Visit Page](https://megellman.github.io/museum-search-tool/)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.