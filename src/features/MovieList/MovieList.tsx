import { useEffect, useState } from 'react'
import { getPopularMovies } from '@/api/tmdb'
import MovieCard from './MovieCard'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/EmptyState'
import { Movie } from '@/types/movie'

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    getPopularMovies()
      .then((data) => setMovies(data))
      .catch(() => setError('Failed to load movies'))
      .finally(() => setLoading(false))
  }, [])

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <Loader2 className="h-20 w-20 animate-spin text-primary" />
      </div>
    )
  if (error)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <EmptyState message={error} />
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
