import { useQuery } from '@tanstack/react-query'
import { getPopularMovies } from '@/api/tmdb'
import { Movie } from '@/types/movie'

export function usePopularMovies() {
  return useQuery<Movie[]>({
    queryKey: ['movies', 'popular'],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  })
}
