import React, { Component } from 'react';
const Weather = () => {
    return ( 
        <div className="row m-3 shadow-lg rounded" style={{background:"#444",position:'relative'}}>
            <img className="col-3" src="https://img.icons8.com/doodle/40/000000/sun--v1.png"/>
            <div className="col-9 text-light">82&#176;F in your Area <span style={{position:'absolute',right:'1em'}}>89&#176;/68&#176;</span>
            <br/>Haze <span style={{position:'absolute',right:'1em'}}><img src="https://img.icons8.com/doodle/24/000000/rain--v1.png"/>10% today</span></div>
        </div>
     );
}
 
export default Weather;