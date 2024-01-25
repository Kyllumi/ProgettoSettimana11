import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArtistPage() {
    const [artist, setArtist] = useState({});
    const [artistAlbums, setArtistAlbums] = useState([]);
    const { artistId } = useParams();

    const options = {
        method: 'GET',
        url: 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId,
    };

    useEffect(() => {
        axios.request(options)
            .then((response) => {
                setArtist(response.data);

                const options2 = {
                    method: 'GET',
                    url: `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`
                };

                axios.request(options2)
                    .then((response) => {
                        setArtistAlbums(response.data.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage ms-4">
            <div className="row mb-3">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 className="titleMain">{artist.name}</h2>
                    <div id="followers">{artist.nb_fan} followers</div>
                    <div className="d-flex justify-content-center" id="button-container">
                        <button className="btn btn-success mainButton me-2"
                            id="playButton">
                            PLAY
                        </button>
                        <button className="btn btn-outline-light mainButton"
                            id="followButton">
                            FOLLOW
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                    <div className="mt-4 d-flex justify-content-start">
                        <h2 className="text-white font-weight-bold">Tracks</h2>
                    </div>
                    <div className="pt-5 mb-5">
                        <div className="row" id="apiLoaded">
                            {artistAlbums.map((item) => (
                                <div className="col-6 col-md-4 col-lg-3 text-center imgLinks" key={item.id}>
                                    <Link to={`/album/${item.album.id}`}>
                                        <img className="img-fluid " src={item.album.cover_medium} alt="1" style={{ width: '100%' }} />
                                    </Link>
                                    <p>
                                        <Link to={`/artist/${item.artist.id}`}>
                                            Track: {item.title}
                                        </Link> <br />
                                        <Link to={`/album/${item.album.id}`}>
                                            Album: {item.album.title}<br />
                                        </Link>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
