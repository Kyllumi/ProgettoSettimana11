import Next from "../assets/Next.png"
import Previous from "../assets/Previous.png"
import Shuffle from "../assets/Shuffle.png"
import Repeat from "../assets/Repeat.png"
import Play from "../assets/Play.png"
import { useSelector } from "react-redux"
import { PlusCircle } from "react-bootstrap-icons"

export default function MyPlayer() {

    const state = useSelector(state => state)
    console.log(state);

    return (
        <>
            <div className="container-fluid fixed-bottom bg-container pt-1">
                <div className="row">
                    <div className="col-2 px-0 d-none d-md-block"></div>
                    <div className="col-12 col-md-10 ps-0 text-white">
                        <div className="row">
                            <div className="col-2 d-none d-md-flex align-items-center">
                                <img className="img-fluid mt-2 rounded" src={state[0].album.cover_small} alt="1" />
                                <div className="ms-2">
                                    <p className="songName">{state[0]?.title_short}</p>
                                    <p className="songArtist">{state[0]?.artist?.name}</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="row justify-content-center align-items-center playerControls ps-3">
                                    <div className="col-2 col-md-1 ">
                                        <img className="img-fluid mt-2 rounded" src={Shuffle} alt="1" />
                                    </div>
                                    <div className="col-2 col-md-1">
                                        <img className="img-fluid mt-2 rounded" src={Previous} alt="1" />
                                    </div>
                                    <div className="col-2 col-md-1">
                                        <img className="img-fluid mt-2 rounded" src={Play} alt="1" />
                                    </div>
                                    <div className="col-2 col-md-1">
                                        <img className="img-fluid mt-2 rounded" src={Next} alt="1" />
                                    </div>
                                    <div className="col-2 col-md-1">
                                        <img className="img-fluid mt-2 rounded" src={Repeat} alt="1" />
                                    </div>
                                    <div className="col-2 col-md-1">
                                        <PlusCircle className="img-fluid mt-2 rounded i" />
                                    </div>
                                </div>
                                <div className="row mt-3 align-items-center ">
                                    <div className="col-12">
                                        <div className="progress ms-2">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
        // <div className="container-fluid fixed-bottom bg-container pt-1">
        //     <div className="row">
        //         <div className="col-4">
        //             <div className="row mt-1">
        //                 <div className="col-7 pe-0">
        //                     <div className="text-end propicSong">
        //                         <img className="img-fluid mt-2 rounded" src={state[0].album.cover_small} alt="1" />
        //                     </div>
        //                 </div>
        //                 <div className="col align-self-center">
        //                     <p className="songName">{state[0]?.title_short}</p>
        //                     <p className="songArtist">{state[0]?.artist?.name}</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col-7">
        //             <div className="row justify-content-start">
        //                 <div className="col-lg-10 offset-lg-2">
        //                     <div className="row">
        //                         <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
        //                             <div className="row text-center align-items-center">
        //                                 <a href="#a" className="col p-0">
        //                                     <img src={Shuffle} alt="shuffle" />
        //                                 </a>
        //                                 <a href="#b" className="col p-0">
        //                                     <img src={Previous} alt="shuffle" />
        //                                 </a>
        //                                 <a href="#c" className="col p-0">
        //                                     <img src={Play} alt="shuffle" />
        //                                 </a>
        //                                 <a href="#d" className="col p-0">
        //                                     <img src={Next} alt="shuffle" />
        //                                 </a>
        //                                 <a href="#e" className="col p-0">
        //                                     <img src={Repeat} alt="shuffle" />
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="row justify-content-center align-items-center playBar py-2">
        //                         <div className="text-white col-2 text-end"> 00:00 </div>
        //                         <div className="col-8 col-md-6">
        //                             <div className="progress">
        //                                 <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="text-white col-2"> 00:00 </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col-2">
        //             <PlusCircle className="plusButton text-white" />
        //         </div>

        //     </div>
        // </div>
    )
}
