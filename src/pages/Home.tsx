import MovieList from '@/features/MovieList/MovieList'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'watched' | 'unwatched'>('all')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">Movie List</h1>
      </header>

      {/* Filters */}
      <div className="flex gap-3 p-4 justify-center">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'watched' ? 'default' : 'outline'}
          onClick={() => setFilter('watched')}
        >
          Watched
        </Button>
        <Button
          variant={filter === 'unwatched' ? 'default' : 'outline'}
          onClick={() => setFilter('unwatched')}
        >
          Unwatched
        </Button>
      </div>

      <main>
        <MovieList filter={filter} />
      </main>
    </div>
  )
}
