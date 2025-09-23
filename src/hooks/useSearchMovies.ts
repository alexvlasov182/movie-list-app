import { useQuery } from '@tanstack/react-query'
import tmdb from '@/api/tmdb'
import { Movie } from '@/types/movie'

const searchMoviesAPI = async (query: string): Promise<Movie[]> => {
  if (!query) return []
  const response = await tmdb.get('/search/movie', { params: { query } })
  return response.data.results
}

export function useSearchMovies(query: string) {
  return useQuery<Movie[]>({
    queryKey: ['movies', 'search', query],
    queryFn: () => searchMoviesAPI(query),
    enabled: !!query,
  })
}
