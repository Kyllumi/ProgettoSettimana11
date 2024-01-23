import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function HomepageGallery({ genere }) {
    const [data, setData] = useState([]);
    let genre = genere;

    const options = {
        method: 'GET',
        url: `https://striveschool-api.herokuapp.com/api/deezer/search?q=${genre}`,
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

        <div className="row">
            <div className="col-10"></div>
            <div id={genre.toLowerCase()} className="pt-2">
                <h2 className="ms-4 ps-2">{genre}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks m-0 my-3" id="hipHopSection">
                    {data.slice(0, 4).map((item) => (
                        <div className="col text-center" key={item.id}>
                            <Link to={`/album/${item.album.id}`}>
                                <img className="img-fluid" src={item.album.cover_medium} alt="1" />
                            </Link>
                            <p>
                                <Link to={`/album/${item.album.id}`}>
                                    Album: {item.album.title}<br />
                                </Link>

                                <Link to={`/artist/${item.artist.id}`}>
                                    Artist: {item.artist.name}
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


