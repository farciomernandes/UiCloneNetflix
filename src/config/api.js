import Axios from 'axios';

export const key = '74961d75219b5d64773b2a45615565f6';
export const base_url = 'https://api.themoviedb.org/3';

export const reqMovies = async (url) =>{
    const results = await Axios.get(`${base_url}${url}`);
    return results.data;
}

