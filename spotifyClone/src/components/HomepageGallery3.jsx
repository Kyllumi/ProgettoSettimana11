import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function HomepageGallery() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://striveschool-api.herokuapp.com/api/deezer/search?q=top',
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks m-0 my-3" id="hipHopSection">
            {data.slice(8, 12).map((item) => (
                <div className="col text-center" key={item.id}>
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
    )
}


