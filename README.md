## General information about the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Main features

- Movies search.
  - You can search movies or series using OMDb API. This is a RESTful web service to obtain movie information.
  - You have to type a query into the search field. The search will be performed by the name of the movie in the database.
- Movie details.
  - Сlicking on the movies list item will take you to the movie details page with additional information: trailer, rating, description e.t.c.
- Movies navigation.
  - The result of your search will be display as a list of ten items.
  - You have the option to navigate the movies list items with arrows in the header.
  - Also the application has pagination. You can move through the pages of the movies list.

### Steps how to build/launch your application

1. First step was routing planning: name of routes, paths nesting. The app has three pages: home (first when you get to site), movies list page (result of your search), movies details.
2. Then I planned state structure. Since this is small app I decided not to use Redux and located main state in the component Home page (movies data) and Movie Details page (movie details information). Rest of the components getting props from this two. Also for state transfer I used route params and location state.
3. I tried to avoid of big solid pieces of code and structure into small maintained components.
4. Stylization performed using Sass.
5. REST API request are made with axios library.
6. The app was deployed on Netlify hosting service.
