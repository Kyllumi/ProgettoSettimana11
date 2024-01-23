import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { Container, Row } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import MyPlayer from './components/MyPlayer';
import AlbumPage from './pages/AlbumPage'
import ArtistPage from './pages/ArtistPage'

function App() {

  return (
    <BrowserRouter>
      <Container className="fluid">
        <Row>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/album/:albumId" element={<AlbumPage />} />
            <Route path="/artist/:artistId" element={<ArtistPage />} />
          </Routes>
          <MyPlayer />
        </Row>
      </Container>

    </BrowserRouter>
  )
}

export default App
