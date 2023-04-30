import React from "react";
import { useLocation } from "react-router-dom";
import './Home.css';
// import Loader from 'react-loaders';

function Home (){
    const location = useLocation()
    
    return(
        <div className="homepage">

            <h1>Welcome {location.state.id} I hope you enjoy the site!</h1>
            {/* <Loader type="pacman" /> */}
        </div>
    )
};

export default Home