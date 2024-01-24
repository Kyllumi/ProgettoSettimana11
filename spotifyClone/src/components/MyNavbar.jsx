import { InputGroup, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Spotify_Logo.png';
import { useState } from 'react';

export default function MyNavbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // navigate(`/results/${search}`);
            setSearch("");
            e.target.value = "";
        }
    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        // navigate(`/results/${search}`);
        setSearch("");
        e.target.value = "";
    }

    const handleChange = (e) => {
        navigate(`/results/${e.target.value}`);
        setSearch(e.target.value);
    }

    return (
        <div className="col-2" id='sidebar'>
            <Navbar className="fixed-left" >
                <div className="nav-container d-flex justify-content-between align-items-center flex-column mx-1">
                    <Navbar.Brand className="me-5" as={Link} to="/">
                        <img src={logo} alt="Spotify_Logo" width={131} height={40} className="m-0" />
                    </Navbar.Brand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Navbar className="navbar-nav" >
                            <ul className='ps-0'>
                                <li className='ps-3'>
                                    <NavLink className="nav-item nav-link" as={Link} to="/">
                                        <i className="fas fa-home fa-lg" /> Home </NavLink>
                                </li>
                                <li className='ps-3'>
                                    <NavLink className="nav-item nav-link" as={Link} to="/library">
                                        <i className="fas fa-book-open fa-lg" /> Your Library </NavLink>
                                </li>
                                <InputGroup className="input-group mt-3 px-3">
                                    <input type="text" className="form-control mb-2" id="searchField" placeholder="Cerca" aria-label="Search" aria-describedby="basic-addon2" onChange={handleChange} onKeyDown={handleSubmit} />
                                    <div style={{ marginBottom: "4%" }}>
                                        <button className="btn btn-outline-secondary btn-sm h-100" type="button" onClick={handleSubmit2}> GO </button>
                                    </div>
                                </InputGroup>
                            </ul>
                        </Navbar>
                    </div>
                </div>
                <div className="nav-btn">
                    <button className="signup-btn" type="button">
                        Sign Up
                    </button>
                    <button className="login-btn" type="button">
                        Login
                    </button>
                    <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
                </div>
            </Navbar>
        </div>
    )
}
