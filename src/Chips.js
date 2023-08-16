import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import Chip from "./Chip";

function Chips(){
    
    const [chips, setChips] = useState([]);
    
    const addChips = () => {
        setChips(chips => {
            const newChips = chips.slice();
            newChips.push(uuid());
            console.log('newChips', newChips);
            return newChips;
        })
    }
    

    return (
        <div className="background-chips">
            <div className="dialog-box">
                <button onClick={addChips}>Add chips</button>
                <Link className="dialog-link" to={'/'}>Go back!</Link>
                
            </div>
                {chips.map( n => <Chip key={n}/>)}
        </div>
    )
}

export default Chips;