import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MovieItem extends Component {
    render() {
        const {item} = this.props;
        // const { userList, filter } = this.state;
        // const { url } = this.props.match;
        return (
            <li className='movie-item'>
                <Link to={{
                    pathname: `/movies/${item.id}`,
                    state: {
                        movie: item,
                    },
                }} key={item.id}>
                    {item.name || item.title}
                </Link>
            </li>
        );
    }
}

export default MovieItem;