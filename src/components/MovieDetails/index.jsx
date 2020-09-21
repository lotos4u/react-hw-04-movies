import React, {Component} from 'react';
import {getDetails} from "../../api/movies";

class MovieDetails extends Component {

    state = {
        movie: null,
    };

    componentDidMount() {
        getDetails(this.props.match.params.id).then(r => {
            this.setState({movie: r});
        }).catch(e => console.warn(e));
    }

    handleGoBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        const {movie} = this.state;
        if (!movie) {
            return '';
        }
        console.log(movie);
        return <>
            <div className='back-btn'>
                <button onClick={this.handleGoBack}>Go Back</button>
            </div>
            <div className='movie-details'>
                <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}/>
                <h2>{movie.name || movie.title} ({movie.release_date.split('-')[0]})</h2>
                <span>User score {movie.vote_average}</span>
                <h3>Overview</h3>
                <span>{movie.overview}</span>
                <h3>Genres</h3>
                <span>{movie.genres.map(g => `${g.name} `)}</span>
                <hr/>
                <h4>Additional information</h4>
                <ul>
                    <li>Cast</li>
                    <li>Reviews</li>
                </ul>
            </div>
        </>;
    }
}

export default MovieDetails;