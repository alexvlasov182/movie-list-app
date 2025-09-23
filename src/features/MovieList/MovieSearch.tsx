import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/EmptyState'
import MovieCard from './MovieCard'
import { useSearchMovies } from '@/hooks/useSearchMovies'

export default function MovieSearch() {
  const [query, setQuery] = useState('')
  const { data: movies = [], isLoading } = useSearchMovies(query)

  return (
    <div className="p-6">
      <Input
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6"
      />
      {isLoading && (
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {!isLoading && movies.length === 0 && query && (
        <EmptyState message="No movies found" />
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
