import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AlbumPage() {
    const [album, setAlbum] = useState({});
    const { albumId } = useParams();
    console.log(albumId);

    const options = {
        method: 'GET',
        url: 'https://striveschool-api.herokuapp.com/api/deezer/album/' + albumId,
    };

    useEffect(() => {
        axios.request(options)
            .then((response) => {
                setAlbum(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
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
                <div className="col-md-3 pt-5 text-center" id="img-container">
                    {album.cover && <img src={album.cover} className="card-img img-fluid" alt="Album" />}
                    <div className="mt-4 text-center">
                        {album.title && <p className="album-title">{album.title}</p>}
                    </div>
                    <div className="text-center">
                        {album.artist && album.artist.name && <p className="artist-name">{album.artist.name}</p>}
                    </div>
                    <div className="mt-4 text-center">
                        <button id="btnPlay" className="btn btn-success" type="button">Play</button>
                    </div>
                </div>
                <div className="col-md-8 p-5 pe-0">
                    <div className="row">
                        <div className="col-md-10 mb-5" id="trackList">
                            {album.tracks ? album.tracks.data.map((track) => (
                                <div className="py-3 trackHover" key={track.id}>
                                    <a href="#" className="card-title trackHover px-3" style={{ color: 'white' }}>{track.title}</a>
                                    <small className="duration pe-2" style={{ color: 'white' }}>{Math.floor(
                                        parseInt(track.duration) / 60 // setting the duration minutes
                                    )}:{parseInt(track.duration) % 60 < 10 ? "0" + (parseInt(track.duration) % 60) : parseInt(track.duration) % 60
                                        }</small>
                                </div>
                            )) : <p>Loading...</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}