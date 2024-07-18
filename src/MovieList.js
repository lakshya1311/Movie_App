import React from "react";
import MovieCard from "./MovieCard";



class MovieList extends React.Component{
    
    render(){
        const {movies,handleAddStars,handleAddtocart,handleDecStars, handleToggleFav} =  this.props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {movie.id}
                           handleAddStars = {handleAddStars}
                           handleDecStars = {handleDecStars}
                           handleToggleFav = {handleToggleFav}
                           handleAddtocart = {handleAddtocart}
                            />

            ))}              
            </div>
        )
    }
}

export default MovieList;