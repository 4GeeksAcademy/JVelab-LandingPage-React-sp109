import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top" aria-label="Third navbar example"> 
            <div className="container-fluid w-75"> 
                <a className="navbar-brand" href="#">Start Bootstrap</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation"> 
                <span className="navbar-toggler-icon"></span> </button> 
                <div className="collapse navbar-collapse" id="navbarsExample03"> 
                    <ul className="navbar-nav mb-2 mb-sm-0 ms-auto"> 
                        <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Home</a> </li> <li className="nav-item"> <a className="nav-link" href="#">About</a> </li> 
                        <li className="nav-item"> <a className="nav-link" aria-disabled="true">Services</a></li>
                        <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li> 
                    </ul> 
                </div> 
            </div> 
        </nav>
    )
}

export default Nav