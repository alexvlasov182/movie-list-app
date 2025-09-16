import MovieList from '@/features/MovieList/MovieList'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">Movie List</h1>
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  )
}

export default App
