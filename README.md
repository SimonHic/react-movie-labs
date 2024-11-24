# Assignment 1 - ReactJS app.

Name: Simon Hickey

## Overview.

This assignment extends the React Movies Lab work by integrating new TMDB API features such as popular movies, recommendations, and credits. It adds watchlist functionality, filtering, sorting, and a responsive UI using MUI and React Query.

### Features.
 
+ Upcoming Page: Users can view movies that are going to be released soon. 
+ Watchlist Functionality: Users can add movies to a Watchlist for future viewing. Any movie added to the watchlist will persist using local storage.
+ Popular Movies Page: Displays movies sorted automatically by popularity in descending order with a popularity score visible only to this page (Conditional Rendering) 
+ Recommendations Page: Shows movie recommendations based on a specific movie ID using a parameterised TMDB API endpoint.
+ Movie Credits (Cast): Viewable movie credits on the Movie Details Page, showcasing cast details in a simple table format.
+ Rating-Based Sorting and Filtering: Users can filter movies by a highest, lowest, or all (By Default) in the filterMoviesCard. This is based on their vote average (vote_average).
+ MUI Components: Accordions used for movie genres and details on the Movie Details page, offering a way to collapse information on this page.
+ Responsive UI: Navbar hover effects and Movie card hover scaling effects with shadows for user interactivity.
+ Caching with React Query: Caching with React Query has been implemented for all static and parameterised endpoints used. 

## Setup requirements.

Setup requirements are _standard_ as follows:

1. Install dependencies:
npm install

2. Create a .env file in the root directory and add your TMDB API key:
REACT_APP_TMDB_KEY=your_key_goes_here

3. Run the App:
npm start

## API endpoints.

1. *Upcoming Movies - /movie/upcoming*
+ Fetches a list of movies that are scheduled to be released soon.
+ Used for displaying the Upcoming Movies Page and integrating watchlist functionality.

2. *Discover Movies - /discover/movie*
+ Previously implemented through labs but worth noting that it was used for filtering and sorting functionality in the watchlist and movie filtering new features.

3. *Popular Movies - /movie/popular*
+ Fetches a list of the most popular movies currently.
+ Used for the Popular Movies Page, which includes conditional rendering and automatic sorting by popularity score.

4. *Movie Recommendations - /movie/:id/recommendations*
+ Fetches movie recommendations based on a specific movie ID.
+ Used for displaying recommended movies for a particular title.

5. *Movie Credits - /movie/:id/credits*
+ Fetches cast details for a specific movie.
+ Used for displaying cast information in the Movie Details Page.

## Routing.

+ */movies/upcoming* - Displays list of upcoming movies on *Upcoming Movies Page.*
+ */movies/popular* - Displays list of the most popular movies on *Popular Movies Page.* 
+ */movies/watchlist* - Displays the movies added to the User's watchlist on the *Watchlist Page.*
+ */movie/:id* - Displays all previous implementations, and displays Credits on the *Movie Details Page.*
+ */movie/:id/recommendations* - Displays a list of recommended movies based on a specific movie on the *Recommended Movies Page.*

## Independent learning (If relevant).

1. *Hover Effects for Navbar and Cards*
+ Implemented simple hover effects for better interactivity and visual feedback for the user.
+ Utilized the sx property for the buttons in navbar and cards
+ Relevant Files: siteHeader/index.js, movieCard/index.js

2. *MUI Accordion Component*
+ Used the Accordion component to create a collapsible dropdowns for the Movie Details page to condense information for better readability for Users.
+ Relevant Files: movieDetails/index.js

3. *Parameterised Endpoints*
+ Researched and implemented multiple TMDB parameterised endpoints (/movie/:id/recommendations and /movie/:id/credits) for fetching recommendations and credits for a specific movie.
+ Relevant Files: tmdb-api.js, movieCredits/index.js, pages/recommendedMoviesPage.js

4. *Sorting and Filtering*
+ Added functionality to sort and filter movies based on their vote_average (Movie Rating) using the provided TMDB data.
+ Implemented auto-sorting for Popular Movies Page based on popularity score, so it will be sorted for the User in descending order automatically. Also made it so that it conditionally renders only on the Popular Movies Page. The property showPopularity is set to false by default unless Popularity Page is active.
+ Relevant Files: filterMoviesCard/index.js, templateMovieListpage/index.js, pages/popularMoviesPage.js, movieCard/index.js

## References

https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values#answer-979289
https://www.javascripttutorial.net/javascript-array-sort/
https://stackoverflow.com/questions/52596070/materialui-custom-hover-style#answer-52597084
https://mui.com/material-ui/react-accordion/
https://developer.themoviedb.org/reference/intro/getting-started