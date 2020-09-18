import React, {Component} from 'react';
import MovieItem from "../../MovieItem";

class MoviesList extends Component {
    render() {
        const {items} = this.props;
        return (
            <ul className='movies-list'>
                {items.map(i => <MovieItem item={i} key={i.id}/>)}
            </ul>
        );
    }
}

export default MoviesList;