import React from "react";

const Card = () => {
    return (
        <div className="card">
            <img src="https://www.bubblewebs.info/wp-content/uploads/2018/05/SEO-optimised-image-1.jpg" className="card-img-top" alt="500x325px"/>
            <div className="card-body text-center fs-6">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card