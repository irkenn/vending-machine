import React from "react";
import { Link } from "react-router-dom";

function Soda(){

    return (
        <div className="background-soda">
            <div className="dialog-box">
                <h2>OMG SUGARRRRRRRR</h2>
                <Link to={'/'}>
                    Go back!
                </Link>
            </div>
        </div>
    )
}

export default Soda;