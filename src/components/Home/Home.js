import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <div className="nav d-block mx-auto mt-3">
                <div className="navbar navbar-light bg-dark">
                    <div className="nav-item active">
                        <Link className="nav-link" to="/submit">
                            Register Case
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/register">
                            Register Oficer
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/list">
                            Officers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
