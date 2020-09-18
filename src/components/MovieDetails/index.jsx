import React, {Component} from 'react';

class MovieDetails extends Component {
    handleGoBack = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        const {movie} = this.props.location.state;
        return <>
            <div className='back-btn'>
                <button onClick={this.handleGoBack}>Go Back</button>
            </div>
            <div className='movie-details'>
                {movie.name || movie.title}
            </div>
        </>;
    }
}

export default MovieDetails;