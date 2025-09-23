import { useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/EmptyState'
import { useMovieDetails } from '@/hooks/useMovieDetails'

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>()
  const movieId = Number(id)

  const { data: movie, isLoading, isError } = useMovieDetails(movieId)

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  if (isError || !movie) return <EmptyState message="Movie not found" />

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="text-muted-foreground mb-6">{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-lg"
      />
      <div className="mt-6 space-y-2">
        <p>
          <strong>Release date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}/10
        </p>
      </div>
    </div>
  )
}
