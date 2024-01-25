import { PlusCircle } from "react-bootstrap-icons";
import { useSelector } from "react-redux"
import { toggleFavTrack } from '../store/action';
import { useDispatch } from 'react-redux';
import { setSong } from "../store/action";


export default function LibraryPage() {
    const dispatch = useDispatch();
    const favTrack = useSelector(state => state.favTrack || [])
    const handleFavTrack = (track) => {
        dispatch(toggleFavTrack(track));
    }
    return (
        <div className="col-10 col-md-9 offset-md-3 mainPage ms-2">
            <div className="row mt-5">
                <h2 className="text-white ms-5 mb-4 ps-1">I tuoi brani preferiti</h2>

                <div className="row mb-3 headerPL">
                    <div className="col-1 text-white text-end">
                        #
                    </div>
                    <div className="col-6 text-white ps-5">
                        Titolo
                    </div>
                    <div className="col-3 text-white">
                        Album
                    </div>
                    <div className="col-2 text-white text-center">
                        Durata
                    </div>
                </div>

                {favTrack.map((track, index) => (
                    <div className="row align-items-center trackHover my-2 py-1" key={track.id}>
                        <div className="col-1 text-white text-end" onClick={() => dispatch(setSong(track))}>
                            <a>{index + 1}</a>
                        </div>
                        <div className="col-6" onClick={() => dispatch(setSong(track))}>
                            <div className="row align-items-center">
                                <div className="col-3 text-center">
                                    <img style={{ maxWidth: "3rem" }} className="img-fluid rounded" src={track.album.cover_medium} alt="1" />
                                </div>
                                <div className="col-9">
                                    <p className="songName">{track.title_short}</p>
                                    <p className="songArtist">{track.artist.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3" onClick={() => dispatch(setSong(track))}>
                            <p className="songAlbum">{track.album.title}</p>
                        </div>

                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <p className="text-decoration-none songDuration me-2">{Math.floor(parseInt(track.duration) / 60)}:{parseInt(track.duration) % 60 < 10 ? "0" + (parseInt(track.duration) % 60) : parseInt(track.duration) % 60}</p>
                            <PlusCircle className={`img-fluid rounded ${favTrack.find(track => track.id === track.id) ? 'text-success i' : 'i'}`} onClick={() => handleFavTrack(track)} />
                        </div>
                    </div>
                ))}

            </div>
        </div >
    )
}
