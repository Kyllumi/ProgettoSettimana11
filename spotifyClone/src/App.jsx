import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AlbumPage from './pages/AlbumPage'
import ArtistPage from './pages/ArtistPage'
import ResultsPage from './pages/ResultsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
        <Route path="/artist/:artistId" element={<ArtistPage />} />
        <Route path="/results/:search" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
