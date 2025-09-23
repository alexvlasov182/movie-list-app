import { Movie } from '@/types/movie'
import axios from 'axios'

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    'Content-Type': 'application/json',
  },
})

console.log(tmdb)

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdb.get('/movie/popular')
    console.log(response)
    return response.data.results
  } catch (error) {
    console.error('Faild to fetch popular movies', error)
    throw error
  }
}

export const getMovieDetails = async (id: number): Promise<Movie> => {
  try {
    const response = await tmdb.get(`/movie/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(`Faild to fetch movie with id ${id}`, error)
    throw error
  }
}

export default tmdb
