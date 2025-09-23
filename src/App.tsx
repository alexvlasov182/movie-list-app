import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import MovieDetails from './features/MovieList/MovieDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  )
}

export default App
