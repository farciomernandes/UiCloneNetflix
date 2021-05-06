import {key, base_url, reqMovies} from '../config/api';

export default {
  getDetailsMovie: async(movieId, type) =>{
    let details = {};
      if(movieId){
        switch(type){
          case 'movie':
            details = await reqMovies(`/movie/${movieId}?language=pt-BR&api_key=${key}`);
            break;
          case 'tv':
            details = await reqMovies(`/tv/${movieId}?language=pt-BR&api_key=${key}`)
            break;
          default:
            details = null;
            break;
          }
      }
    return details;
  }
}
