# Museum Artifact Search Tool
In this activity, you will work with a group to build an application that searches and displays results from a museum database API (e.g., Smithsonian, British Museum, or another museum's public API).

# Instructions
The completed application should meet the following criteria:

* As a user, I can submit a search query from the application to request data and receive a response from the museum API.

* As a user, I can either perform a generic search for artifacts, artwork, or other collections, or I can select a category in the form to filter results (e.g., “Artifacts,” “Art,” “Sculptures,” etc.).

* As a user, I can see all the results of my search displayed on a separate page.

* As a user, I can conduct additional searches from the results page as well.

To learn about how to use the API, check out the specific documentation for the museum you're working with (e.g., Smithsonian, British Museum, etc.).

## The Homepage
The homepage (index.html) should have the following:

* A simple, intuitive user interface (UI).

* A form with a text input field to capture a search query and a category dropdown to filter the results (e.g., "Artifacts," "Art," "Sculptures," etc.). The options in the dropdown should be a list of categories available in the museum database.

* A browser event listener attached to the form to execute a function on submission. This will capture both form values (query and category) and redirect the user to a search results page with those values included in the URL as query parameters. This will use the browser’s location.replace() method.

* If there is no category selected from the dropdown, the URL should look something like the following example:
  
    `/search-results.html?q=egypt&category=`

* If there is a category selected from the dropdown, the URL should look something like the following example:

    `/search-results.html?q=egypt&category=artifacts`

## The Search Results Page
The search results page (search-results.html) should have and do the following:

* On page load, if there are query parameters, immediately parse them and use them to construct a request URL to fetch data from the museum’s API.

* If there is a value for the category query parameter, use the category to filter the results (e.g., "Art," "Artifacts," etc.). If no category is selected, show results for all types of collections.

* The response from the API request will be displayed on the page. You will need to decide which data from the results property of the API response will be displayed. Some examples could be the name of the artifact, an image, a short description, and the category.

* The same form from the homepage should be here as well. Instead of redirecting a user to another page, however, it will perform a search right on the page and display the new results dynamically.

# 💡 Hints
Will every result have the same data? If not, how will we handle printing it to the page? Museum collections often include various types of data (e.g., text, images, or videos), so make sure you account for the possibility of missing or variable data.

Can the form design and functionality from the homepage be reused for the search results page? Absolutely! The form will simply trigger a new request without needing to redirect, allowing users to refine their search directly on the results page.

# API Suggestions
Here are a few public APIs you could use for this project:

* Smithsonian Collections Search API: Provides access to metadata for millions of items in the Smithsonian Institution’s collections. API Documentation

* British Museum API: Offers access to their vast collection of artifacts, artwork, and more. API Documentation

* Europeana API: A platform that provides access to European cultural heritage. API Documentation

You can choose any of these APIs or find another museum's open dataset for your project.

# Example Query:
If you're using the Smithsonian API, a URL might look like:

`https://api.si.edu/openaccess/api/v1.0/search?q=egyptian&category=artifacts`

Where:

`q=egyptian` is the search term (e.g., “Egyptian”).

`category=artifacts` limits results to items categorized as artifacts.

# Project Deliverables:
Homepage: A simple UI with a search form and category dropdown. Upon form submission, the user should be redirected to the results page with the query parameters in the URL.

Search Results Page: A page that dynamically loads and displays results based on the query parameters in the URL. The results should include images, descriptions, and any relevant information from the API response.

Reusability: The same form from the homepage should be present on the search results page, allowing users to refine their search without leaving the page.