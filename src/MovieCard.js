import { Component } from "react";

class MovieCard extends Component{
    constructor(){
        super();
       
        // this.addStars=this.addStars.bind(this);
        // this.decStars=this.decStars.bind(this);
        // this.handleFav=this.handleFav.bind(this);
        // this.handleAddToCart = this.handleAddToCart.bind(this);
    }


    render(){
        // const {title,plot,price,rating,stars,fav,isInCart}=this.props
        
        const {title,plot,price,rating,stars,fav,isInCart,poster,key}=this.props.movies;
        const {addStars,decStars,handleFav,handleAddToCart}=this.props;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="Poster" src={poster} />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">RS {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" alt="-" src="https://cdn-icons-png.flaticon.com/128/10263/10263924.png" onClick={()=>{decStars(this.props.movies)}} />
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                                <img className="str-btn" alt="+" src="https://cdn-icons-png.flaticon.com/128/1828/1828819.png" onClick={()=>{addStars(this.props.movies)}} />
                                
                                <span> {stars}</span>
                            </div>
                            {/* <div className="stars">4</div> */}
                            
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handleFav(this.props.movies)}}>{fav?"Un-Favourite":"Favourite"}</button>
                            
                            
                            <button className={isInCart?"unfavourite-btn":"cart-btn"} onClick={()=>{handleAddToCart(this.props.movies)}}>{isInCart?"Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MovieCard;