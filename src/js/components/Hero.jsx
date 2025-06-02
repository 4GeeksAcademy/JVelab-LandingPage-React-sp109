import React from "react";

const Hero = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 w-75 mx-auto"> 
            <div className="container-fluid py-5"> 
                <h1 className="display-5">A Warm Welcome!</h1> 
                <p className="col fs-4">
                    Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
                </p> 
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button> 
            </div> 
        </div>
    )
}

export default Hero