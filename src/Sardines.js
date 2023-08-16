import React from "react";
import { Link } from "react-router-dom";

function Sardines(){
    return (
        <div className="sardines-background">
            <div className="dialog-box">
             <h2>You don't eat sardines. The sardines, they eat you</h2>
                <Link to={'/'}>
                    Go back!
                </Link>
            </div>

        </div>
    )

}

export default Sardines;