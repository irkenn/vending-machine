import React from "react";
import { Link } from 'react-router-dom';
import './Home.css';

function Home(){
    return (
        // <Route exact path='/'>
        <div className="home-background">
            <div className='title'>
                <h2>Hello, I'm a vending machine, What would you like to eat?</h2>
            </div>
            <div className='vending-machine'>
            
            </div>
            <div className="dialog-box">
                <Link className="dialog-link" to={'/sardines'}>Sardines</Link>
                <Link className="dialog-link" to={'/chips'}>Chips</Link>
                <Link className="dialog-link" to={'/soda'}>Soda</Link>
            </div>
        </div>
        // </Route>
    )


}

export default Home;