import React, {Component} from 'react';
import Form from "./Form";
import {search} from "../../api/movies";
import MoviesList from "./MoviesList";

class Movies extends Component {

    state = {
        query: '',
        movies: [],
    };
    handleFormSubmit = (query) => {
        this.setState({query: query}, () => this.searchMovies());
    };

    searchMovies() {
        search(this.state.query).then(items => {
            this.setState({movies: items})
        }).catch(e => {
            console.log('e=', e);
        });
    }

    render() {
        return (
            <div className='movies'>
                <Form onSubmit={this.handleFormSubmit}/>
                <MoviesList items={this.state.movies}/>
            </div>
        );
    }
}

export default Movies;