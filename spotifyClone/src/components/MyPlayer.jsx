import Next from "../assets/Next.png"
import Previous from "../assets/Previous.png"
import Shuffle from "../assets/Shuffle.png"
import Repeat from "../assets/Repeat.png"
import Play from "../assets/Play.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavTrack } from '../store/action';
import { PlusCircle } from "react-bootstrap-icons"
import { useEffect, useRef } from 'react';

export default function MyPlayer() {
    const dispatch = useDispatch();
    const playingSong = useSelector(state => state.playingSong || [])
    const favTrack = useSelector(state => state.favTrack || [])
    const audioRef = useRef();

    useEffect(() => {
        audioRef.current = new Audio(playingSong[0].preview);
    }, [playingSong]);

    const handlePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const handleFavTrack = (track) => {
        dispatch(toggleFavTrack(track));
    }

    return (
        <>
            {playingSong && playingSong.length > 0 && (
                <div className="container-fluid fixed-bottom bg-container pt-1">
                    <div className="row">
                        <div className="col-2 px-0 d-none d-md-block"></div>
                        <div className="col-12 col-md-10 ps-0 text-white">
                            <div className="row">
                                <div className="col-2 d-none d-md-flex align-items-center">
                                    <img className="img-fluid mt-2 rounded" src={playingSong[0].album.cover_small} alt="1" />
                                    <div className="ms-2">
                                        <p className="songName d-flex flex-wrap">{playingSong[0]?.title_short}</p>
                                        <p className="songArtist">{playingSong[0]?.artist?.name}</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-10 mt-2">
                                    <div className="row justify-content-center align-items-center playerControls ps-3">
                                        <div className="col-2 col-md-1 ">
                                            <img className="img-fluid mt-2 rounded" src={Shuffle} alt="1" />
                                        </div>
                                        <div className="col-2 col-md-1">
                                            <img className="img-fluid mt-2 rounded" src={Previous} alt="1" />
                                        </div>
                                        <div className="col-2 col-md-1">
                                            <img className="img-fluid mt-2 rounded" src={Play} alt="1" onClick={handlePlay} />
                                        </div>
                                        <div className="col-2 col-md-1">
                                            <img className="img-fluid mt-2 rounded" src={Next} alt="1" />
                                        </div>
                                        <div className="col-2 col-md-1">
                                            <img className="img-fluid mt-2 rounded" src={Repeat} alt="1" />
                                        </div>
                                        <div className="col-2 col-md-1">
                                            <PlusCircle className={`img-fluid rounded mt-2 ${favTrack.find(track => track.id === playingSong[0].id) ? 'text-success i' : 'i'}`} onClick={() => handleFavTrack(playingSong[0])} />
                                        </div>
                                    </div>
                                    <div className="row mt-3 align-items-center ">
                                        <div className="col-12 d-flex justify-content-center align-items-baseline">
                                            <p className="mx-1 mb-0">0:00</p>
                                            <div className="progress align-self-center">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="ms-1 mb-0">{Math.floor(parseInt(playingSong[0].duration) / 60)}:{parseInt(playingSong[0].duration) % 60 < 10 ? "0" + (parseInt(playingSong[0].duration) % 60) : parseInt(playingSong[0].duration) % 60}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
