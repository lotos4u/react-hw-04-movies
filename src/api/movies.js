//https://api.themoviedb.org/3/movie/550?api_key=
/*
 -
https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
* */
import * as config from '../config.json';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

/**
 * https://developers.themoviedb.org/3/trending/get-trending
 * список самых популярных фильмов на сегодня для создания коллекции на главной странице.
 * @param page
 * @returns {Promise<*>}
 */
export const getTrending = (page = 1) => {
    const url = `/trending/all/day?page=${page}&api_key=${config.api_key}`;
    return axios.get(url).then(r => {
        return r.data.results;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}

/**
 * https://developers.themoviedb.org/3/search/search-movies
 * поиск кинофильма по ключевому слову на странице фильмов
 * @param query
 * @param page
 * @returns {Promise<*>}
 */
export const search = (query, page = 1) => {
    const url = `/search/movie?language=en-US&&include_adult=true&query=${query}&page=${page}&api_key=${config.api_key}`;
    return axios.get(url).then(r => {
        return r.data.results;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}

export const getDetails = (id) => {
    const url = `/movie/${id}?language=en-US&api_key=${config.api_key}`;
    return axios.get(url).then(r => {
        return r.data;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}


export const getCredits = (id, page = 1) => {
    const url = `/?page=${page}&api_key=${config.api_key}`;
    return axios.get(url).then(r => {
        return r.data.hits;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}

export const getReviews = (id, page = 1) => {
    const url = `/?page=${page}&api_key=${config.api_key}`;
    return axios.get(url).then(r => {
        return r.data.hits;
    }).catch(e => {
        console.warn(e);
        return e;
    });
}

