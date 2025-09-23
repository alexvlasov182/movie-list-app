import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Movie } from '@/types/movie'
import { useToggleWatch } from '@/hooks/useToggleWatch'
import { useNavigate } from 'react-router-dom'

type MovieCardProps = {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const toggleWatch = useToggleWatch()
  const navigate = useNavigate()

  return (
    <Card className="bg-gray-900 text-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
      <div
        className="relative cursor-pointer"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[300px] object-cover"
          />
        ) : (
          <div className="w-full h-[300px] bg-gray-800 flex items-center justify-center">
            No Image
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-lg font-bold line-clamp-2">{movie.title}</h3>
        </div>
      </div>
      <div className="p-3 flex justify-between items-center">
        <p className="text-sm text-gray-400">
          {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => toggleWatch.mutate(movie.id)}
          disabled={toggleWatch.isSuccess}
        >
          {movie.watched ? 'Watched' : 'Watch'}
        </Button>
      </div>
    </Card>
  )
}
