import { useQuery } from '@tanstack/react-query'
import { getMovieDetails } from '@/api/tmdb'
import { Movie } from '@/types/movie'

export function useMovieDetails(id: number) {
  return useQuery<Movie>({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  })
}
