import { Movie } from '@/types/movie'
import axios from 'axios'

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    'Content-Type': 'application/json',
  },
})

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdb.get('/movie/popular')
    return response.data.results
  } catch (error) {
    console.error('Faild to fetch popular movies', error)
    throw error
  }
}

export default tmdb
