import { Row } from "react-bootstrap"
import HomepageGallery1 from "../components/HomepageGallery1"
import HomepageGallery2 from "../components/HomepageGallery2"
import HomepageGallery3 from "../components/HomepageGallery3"
import MyNavbar from "../components/MyNavbar"
import MyPlayer from "../components/MyPlayer"
export default function Homepage() {

    return (
        <Row className="miaHomepage">
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
                    <h2 className="ms-5 ps-1 text-white">Rock</h2>
                    <HomepageGallery1 />
                </div>
                <div className="row mt-3">
                    <h2 className="ms-5 ps-1 text-white">Pop</h2>
                    <HomepageGallery2 />
                </div>
                <div className="row mt-3">
                    <h2 className="ms-5 ps-1 text-white">HipHop</h2>
                    <HomepageGallery3 />
                </div>
                
            </div>

            <MyPlayer />
        </Row>
    )
}




