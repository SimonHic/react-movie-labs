import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToPlaylistsIcon from '../components/cardIcons/playlistAdd'

const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const upcomingMovies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlist = upcomingMovies.filter(m => m.playlist)
  console.log("Filtered Playlist:", playlist);
  localStorage.setItem('playlist', JSON.stringify(playlist))

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToPlaylistsIcon movie={movie} />
      }}
    />
);
};
export default UpcomingMoviesPage;