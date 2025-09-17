import MovieCard from './MovieCard'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/EmptyState'

import { usePopularMovies } from '@/hooks/usePopularMovies'

export default function MovieList() {
  const { data: movies = [], isLoading, isError } = usePopularMovies()

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Loader2 className="h-20 w-20 animate-spin text-primary" />
      </div>
    )
  if (isError)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <EmptyState message="Failed to load movies" />
      </div>
    )
  if (movies.length === 0)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <EmptyState message="No movies found" />
      </div>
    )

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
