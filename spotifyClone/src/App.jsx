import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AlbumPage from './pages/AlbumPage'
import ArtistPage from './pages/ArtistPage'
import ResultsPage from './pages/ResultsPage'
import MyNavbar from './components/MyNavbar'
import MyPlayer from './components/MyPlayer'
import { Row } from 'react-bootstrap';
import LibraryPage from './pages/LibraryPage'

function App() {

  return (
    <BrowserRouter>
      <Row className="myAppG m-0">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/album/:albumId" element={<AlbumPage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
          <Route path="/results/:search" element={<ResultsPage />} />
        </Routes>
        <MyPlayer />
      </Row>
    </BrowserRouter>
  )
}

export default App
