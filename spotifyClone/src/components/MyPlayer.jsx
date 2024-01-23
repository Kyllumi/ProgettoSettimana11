import Next from "../assets/Next.png"
import Previous from "../assets/Previous.png"
import Shuffle from "../assets/Shuffle.png"
import Repeat from "../assets/Repeat.png"
import Play from "../assets/Play.png"

export default function MyPlayer() {
    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
                <div className="col-lg-10 offset-lg-2">
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                            <div className="row text-center">
                                <a href="#a" className="col-2">
                                    <img src={Shuffle} alt="shuffle" />
                                </a>
                                <a href="#b" className="col-2">
                                    <img src={Previous} alt="shuffle" />
                                </a>
                                <a href="#c" className="col-4">
                                    <img src={Play} alt="shuffle" />
                                </a>
                                <a href="#d" className="col-2">
                                    <img src={Next} alt="shuffle" />
                                </a>
                                <a href="#e" className="col-2">
                                    <img src={Repeat} alt="shuffle" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center playBar py-3">
                        <div className="col-8 col-md-6">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
