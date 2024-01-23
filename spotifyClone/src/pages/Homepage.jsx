
import HomepageGallery from "../components/HomepageGallery"
export default function Homepage() {

    return (
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

            {/* RISULTATI DELLA RICERCA */}
            {/* <div className="row d-none">
                <div className="col-10">
                    <div id="searchResults" style="display: none"> 
                        <h2>Search Results</h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
                    </div>
                </div>
            </div> */}

            <HomepageGallery genere={"Rock"} />
            <HomepageGallery genere={"Pop"} />
            <HomepageGallery genere={"HipHop"} />


        </div>
    )
}




