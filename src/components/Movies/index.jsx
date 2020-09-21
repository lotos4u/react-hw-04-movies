import React, {Component} from 'react';
import Form from "./Form";
import {search} from "../../api/movies";
import MoviesList from "./MoviesList";

class Movies extends Component {

    state = {
        query: '',
        movies: [],
    };

    componentDidMount() {
        if (!this.props.location || !this.props.location.state) {
            return;
        }
        const {query, movies} = this.props.location.state;
        this.setState({query: query, movies: [...movies]});
    }

    handleFormSubmit = (query) => {
        this.setState({query: query}, () => this.searchMovies());
    };

    searchMovies() {
        search(this.state.query).then(items => {
            this.setState({movies: items}, () => this.props.history.push({
                pathname: '/movies',
                search: `?query=${this.state.query}`,
                state: {...this.state},
            }));
        }).catch(e => {
            console.log('e=', e);
        });
    }

    render() {
        return (
            <div className='movies'>
                <Form query={this.state.query} onSubmit={this.handleFormSubmit}/>
                <MoviesList items={this.state.movies}/>
            </div>
        );
    }
}

export default Movies;