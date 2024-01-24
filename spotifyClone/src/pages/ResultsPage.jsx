import { Row } from "react-bootstrap"
import MyNavbar from "../components/MyNavbar"
import MyPlayer from "../components/MyPlayer"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"



export default function Homepage() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { search } = useParams();
    console.log(search);


    const options = {
        method: 'GET',
        url: `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`,
    };

    useEffect(() => {
        axios.request(options)
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);



    return (
        <Row className="mioResultspage">
            <MyNavbar />

            <div className="col-10 col-md-9 offset-md-3 mainPage ms-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                        <a href="#a">TRENDING</a>
                        <a href="#b">PODCAST</a>
                        <a href="#c">MOODS AND GENRES</a>
                        <a href="#d">NEW RELEASES</a>
                        <a href="#e">DISCOVER</a>
                    </div>
                </div>

                <div className="row mt-5">
                    <h2 className="text-white ms-5 ps-1">Risultati della ricerca</h2>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks m-0 my-3" id="hipHopSection">
                        {data.map((item) => (
                            <div className="col text-center mb-3" key={item.id}>
                                <a className="pointer" onClick={() => navigate(`/album/${item.album.id}`)}>
                                    <img className="img-fluid" src={item.album.cover_medium} alt="1" />
                                </a>
                                <p>
                                    <a className="pointer" onClick={() => navigate(`/album/${item.album.id}`)}>
                                        Album: {item.album.title}<br />
                                    </a>

                                    <a className="pointer" onClick={() => navigate(`/artist/${item.artist.id}`)}>
                                        Artist: {item.artist.name}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <MyPlayer />
        </Row>
    )
}




