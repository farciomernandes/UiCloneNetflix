import {key, base_url, reqMovies} from '../config/api';

export default {
  getAll: async() =>{
    return [
      {
        category: 'originals',
        title: 'Originais da Netflix',
        items: await reqMovies(`/discover/tv?witch_network=213&language=pt-BR&api_key=${key}`)
      },
      {
        category: 'trending',
        title: 'Recomendados para você',
        items: await reqMovies(`/trending/all/week?language=pt-BR&api_key=${key}`)
      },
      {
        category: 'toprated',
        title: 'Em alta!',
        items: await reqMovies(`/movie/top_rated?language=pt-BR&api_key=${key}`)
      },
      {
        category: 'action',
        title: 'Ação',
        items: await reqMovies(`/discover/movie?with_genres=28&language=pr-BR&api_key=${key}`)
      },
      {
        category: 'comedy',
        title: 'Comédia',
        items: await reqMovies(`/discover/movie?with_genres=35&language=pr-BR&api_key=${key}`)
      },
      {
        category: 'horror',
        title: 'Terror',
        items: await reqMovies(`/discover/movie?with_genres=27&language=pr-BR&api_key=${key}`)
      },
      {
        category: 'documentary',
        title: 'Documentários',
        items: await reqMovies(`/discover/movie?with_genres=99&language=pr-BR&api_key=${key}`)
      }
    ]
  }
}
