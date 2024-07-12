import React from "react";
import { Component } from "react";

import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies : [
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony starsk creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                }]
        } 

    }

    handleAddStars = (movie)=>{
        const {movies} = this.state;
        const mid= movies.indexOf(movie);

        if(movies[mid].stars>=5)
        {
            return;
        }
        else{
            movies[mid].stars+=0.5;
            this.setState({
                movies:movies
            });
        }
    }

    handleDecStars=(movie)=>{
        const {movies} = this.state;
        const mid= movies.indexOf(movie);

        if(movies[mid].stars<=0)
        {
            return;
        }
        else{
            movies[mid].stars-=0.5;
            this.setState({
                movies:movies
            });
        }
    }

    handleFav=(movie)=>{
        const {movies} = this.state;
        const mid= movies.indexOf(movie);
        movies[mid].fav = !(movies[mid].fav);
        this.setState({
            movies:movies
        });
    }

    handleAddToCart = (movie)=>{
        const {movies} = this.state;
        const mid= movies.indexOf(movie);
        movies[mid].isInCart = !(movies[mid].isInCart);
        this.setState({
            movies:movies
        });
    }


  render(){
    // const{title,plot,price,rating,stars,fav,isInCart}=this.state.movies;
    const {movies} =  this.state;
    return (
        
        <div className="main">
        {movies.map((movie,index)=> (
            <MovieCard movies = {movie} 
                        key={index}
                        addStars={this.handleAddStars}
                        decStars={this.handleDecStars}
                        handleFav={this.handleFav}
                        handleAddToCart={this.handleAddToCart}
            />
        ) )}
        
    </div>
     //   <MovieCard 
     //     title={title}
     //     plot={plot}
     //     price={price}
     //     rating={rating}
     //     stars={stars}
     //     fav={fav}
     //     isInCart={isInCart}
     //   />
     
    )
  }  
}

export default MovieList;