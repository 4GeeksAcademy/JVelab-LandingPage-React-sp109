import React from "react";
import Card from "./Card";

const CardVisualizer = () => {
    return (
        <div className="row d-flex w-75 mx-auto my-5">
            <div className="col">
                <Card/>
            </div>
            <div className="col">
                <Card/>
            </div>
            <div className="col">
                <Card/>
            </div>
            <div className="col">
                <Card/>
            </div>
        </div>
    )
}

export default CardVisualizer