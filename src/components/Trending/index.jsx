import React, {Component} from 'react';
import {getTrending} from "../../api/movies";
import MovieItem from "../MovieItem";

class Trending extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        getTrending().then(items => {
            console.log('Trending loaded', items);
            this.setState({movies: items});
        }).catch(e => console.warn(e));
    }

    render() {
        const {movies} = this.state;
        return (
            <div className='trending'>
                <h2>Trending today</h2>
                {movies ? <ul>{movies.map(m => <MovieItem item={m} key={m.id}/>)}</ul> : <p>Loading</p>}
            </div>
        );
    }
}

export default Trending;